import express from 'express';

import authRoutes from './routes/auth.js';

import dotenv from 'dotenv';

import {connectDB} from './lib/db.js';



const app = express();

dotenv.config();
const port = process.env.port

app.use("/api/auth", authRoutes);

app.use(express.json());

app.listen(port, () => {
    console.log('Server running on port ' + port);
    connectDB();
});