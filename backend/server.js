import express from 'express';
import dotenv from 'dotenv';
import Database from './mysql.js';

dotenv.config();
const app = express();
app.use(express.json());

// Simple GET endpoint at /municipality
app.get('/municipality', async (req, res) => {
    const db = Database.getInstance();
    const result = await db.testMethod(1);
    res.json(result);
});

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`);
});
