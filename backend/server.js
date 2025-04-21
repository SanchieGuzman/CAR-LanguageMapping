import express from "express";
import dotenv from "dotenv";
import Database from "./mysql.js";
import { format } from "./format.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/municipality", async (req, res) => {
  const municipality_id = req.body.municipality_id;
  const db = Database.getInstance();
  const result = await db.getMunicipalityLanguages(municipality_id);
  const finalJson = format(result);
  res.json(finalJson);
});

app.post("/province", async (req, res) => {
  const province_id = req.body.province_id;
  const db = Database.getInstance();
  const result = await db.getProvinceLanguages(province_id);
  const finalJson = format(result);
  res.json(finalJson);
});

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
