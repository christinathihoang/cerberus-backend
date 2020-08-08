import express from "express";
import { knex } from "../app";
const router = express.Router();

router.get("/", (req, res) => {
  knex("applications").then((applications: any) => {
    res.status(200).json(applications);
  });
});

router.get("/:id", (req, res) => {
  knex("applications")
    .where({ id: req.params.id })
    .then((application: any) => {
      res.status(200).json(application);
    })
    .catch((err: any) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  knex('applications')
  .insert(req.body)
  .then((application: any) => {
    res.status(200).json(application)
  })
  .catch((err: any) => {
    res.json(err)
  })
})

export default router;
