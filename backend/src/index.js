import express from 'express';

import authRoutes from './routes/auth.js';

import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import {connectDB} from './lib/db.js';

dotenv.config();
const port = process.env.port

const app = express();

app.use(express.json());

app.use(cookieParser());



app.use("/api/auth", authRoutes);


app.listen(port, () => {
    console.log('Server running on port ' + port);
    connectDB();
});