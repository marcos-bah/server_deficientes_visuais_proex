import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.API_PORT || 4000, () => console.log(`Server is running ${process.env.API_PORT || 4000}`));