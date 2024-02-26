import express from "express";
import __dirname from './utils.js';
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const connection = mongoose.connect(process.env.MONGO)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//multer
app.use(express.static(__dirname + '/public'))

app.use(cors({ origin: 'http://localhost:5500', methods: ['GET', 'POST', 'PUT'] }));

//Router
app.use('/api', router);

//Listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Al aire en: ${PORT}`));