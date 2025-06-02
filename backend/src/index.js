import express from 'express';

import authRoutes from './routes/auth.js';

import dotenv from 'dotenv';

import {connectDB} from './lib/db.js';



const app = express();

app.use(express.json());

dotenv.config();
const port = process.env.port

app.use("/api/auth", authRoutes);


app.listen(port, () => {
    console.log('Server running on port ' + port);
    connectDB();
});