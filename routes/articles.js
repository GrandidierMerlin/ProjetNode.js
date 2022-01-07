const express = require("express");
const Articles = require("../models/Articles");
const router = express.Router();

router.get("/articles", (req, res) => {
  const criteria = req.query;
  Articles.findAll({
    where: criteria,
  }).then((users) => res.json(users));
});

router.post("/articles", (req, res) => {
  Articles.create(req.body).then((user) => res.status(201).json(user));
});

router.get("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  Articles.findByPk(id).then((user) => {
    if (!user) res.sendStatus(404);
    else res.json(user);
  });
});

router.delete("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  Articles.destroy({
    where: {
      id: id,
    },
  }).then((nbDeleted) => {
    if (!nbDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  });
});

router.put("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  Articles.update(req.body, {
    where: {
      id: id,
    },
  }).then(([nbUpdated]) => {
    if (!nbUpdated) res.sendStatus(404);
    else Articles.findByPk(id).then((user) => res.json(user));
  });
});

module.exports = router;
