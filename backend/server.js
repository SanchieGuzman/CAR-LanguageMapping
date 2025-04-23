import express from "express";
import dotenv from "dotenv";
import Database from "./mysql.js";
import { format } from "./format.js";
import cors from "cors";
import { promises as fs } from 'fs'; // Use promises version for async/await


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/getPlaceData", async (req, res) => {
  const place_id = req.body.placeId;
  const level = req.body.level
  const db = Database.getInstance();

  let result; 
  if(level === 0){ // municipality level
    result = await db.getMunicipalityLanguages(place_id);
  }else{ // province level
    result = await db.getProvinceLanguages(place_id);
  }  
  const finalJson = format(result);
  const logMessage = JSON.stringify(finalJson, null, 2) + ',\n'; // Add a newline character

  try {
    await fs.appendFile('province_data.json', logMessage); // Use appendFile
    console.log(', Data appended to municipality_data.json'); // Keep the original console log, but add context
  } catch (error) {
    console.error(', Error appending to municipality_data.json:', error); // Important: Handle errors!
  }

  res.json(finalJson);
});

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
