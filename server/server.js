import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {corsOptions} from './config/corsOptions.js';
import {connectDB} from './config/db.js';

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Frontend URL: ${process.env.FRONTEND_URL}`);
});