import express from 'express';
import dotenv from 'dotenv';
import Knex from 'knex';
import cors from 'cors';
import sisterController from './controllers/sisters';
import applicationController from './controllers/applications';

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
const config = require('./knexfile')["development"];
export const knex = Knex(config);

app.use('/sisters', sisterController);
app.use('/applications', applicationController);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})