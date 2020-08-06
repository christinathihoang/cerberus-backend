import express from 'express';
import dotenv from 'dotenv';
import Knex from 'knex';
import cors from 'cors';
import sisterController from './controllers/sisters';

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
const config = require('./knexfile')["development"];
export const knex = Knex(config);

app.use('/sisters', sisterController);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})