import express from "express";
import { knex } from "../app";
const router = express.Router();

router.get("/", (req, res) => {
  knex("applications")
    .then((applications: any) => {
      return Promise.all(applications.map((application: any) => {
        return knex("sisters")
          .where({ id: application.little_id })
          .then((little) => {
            application.little = little;
            return application;
          });
      }));
    })
    .then((response: any) => {
      console.log(response);
      res.status(200).json(response);
    });
});

router.get("/:id", (req, res) => {
  knex("applications")
    .where({ id: req.params.id })
    .then((application: any) => {
      knex("sisters")
        .where({ id: application.little_id })
        .then((little) => {
          application.little = little;
          res.status(200).json(little);
        });
    })
    .catch((err: any) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  knex("applications")
    .insert(req.body)
    .then((application: any) => {
      res.status(200).json(application);
    })
    .catch((err: any) => {
      res.json(err);
    });
});

export default router;
