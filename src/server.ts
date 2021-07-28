import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(4000, () => console.log('Server is running 4000'));