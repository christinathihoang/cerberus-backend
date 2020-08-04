import express from 'express';
import { knex } from '../app';
const router = express.Router();

router.get('/', (req, res) => {
  knex('sisters')
  .then((users: any) => {
    console.log(users)
  })
})

export default router;