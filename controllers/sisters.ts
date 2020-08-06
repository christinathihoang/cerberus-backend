import express from "express";
import { knex } from "../app";
const router = express.Router();

router.get("/", (req, res) => {
  knex("sisters").then((sisters: any) => {
    res.status(200).json(sisters);
  });
});

router.get("/:id", (req, res) => {
  knex("sisters")
    .where({ id: req.params.id })
    .then((sister: any) => {
      res.status(200).json(sister);
    })
    .catch((err: any) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  knex('sisters')
  .insert(req.body)
  .then((sister: any) => {
    res.status(200).json(sister)
  })
  .catch((err: any) => {
    res.json(err)
  })
})

export default router;
