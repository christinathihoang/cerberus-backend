import express from 'express';
import dotenv from 'dotenv';
import sisterController from './controllers/sisters';

dotenv.config();

const app = express();
import Knex from 'knex';

const config = require('./knexfile')["development"];
export const knex = Knex(config);

app.use('/sisters', sisterController);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})