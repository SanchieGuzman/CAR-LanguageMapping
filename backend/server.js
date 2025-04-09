import express from 'express';
import dotenv from 'dotenv';
import Database from './mysql.js';
import { format } from './format.js';

dotenv.config();
const app = express();
app.use(express.json());

// Simple GET endpoint at /municipality
app.get('/municipality', async (req, res) => {
    const municipality_id = req.body.municipality_id;
    const db = Database.getInstance();
    const result = await db.getMunicipalityLanguages(municipality_id);
    const finalJson = format(result);
    res.json(finalJson);
});
// //btw para mag process ng image kunin ko lang sa past proj

//       // IMMAGE ISSUES
//       // Convert the product.product_image to a Uint8Array
//       const byteArray = new Uint8Array(product.product_image.data);

//       // Create a Blob from the byteArray
//       const blob = new Blob([byteArray], { type: "image/jpeg" }); // Adjust MIME type if necessary

//       // Create a temporary object URL for the blob
//       const imageUrl = URL.createObjectURL(blob);

//       //image
//       const itemImage = document.createElement("img");
//       itemImage.classList.add("item-image");
//       itemImage.src = imageUrl;
//       itemImage.alt = product.product_name;
//       itemCardImageContainer.appendChild(itemImage);

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`);
});
