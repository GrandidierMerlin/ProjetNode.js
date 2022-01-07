const { Router } = require("express");
const Articles = require("../models/Articles");
const pool = require('../lib/db.js');
const bcrypt = require('bcrypt');
const router = new Router();
router.get("/articles", (req, res) => {
  const criteria = req.query;
  Articles.findAll({
    attributes: ['authorId', 'firstname','lastname', , 'createdAt', 'updatedAt','content','title','tags','delatedAt','isAdmin'],
    where: criteria,
  }).then((users) => {
    res.json(users); 
  });
});


router.post("/users", (req, res) => {
    Articles.create(req.body).then((articles) => {
    res.status(201).json(articles);
  });
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  Articles.findByPk(id,{
    attributes: ['authorId', 'firstname','lastname', , 'createdAt', 'updatedAt','content','title','tags','delatedAt','isAdmin'],
  }).then((articles) => {
    if (!articles) res.sendStatus(404);
    else res.json(articles);

  });
});

router.put("/users/:id", verifyJWT, (req, res) => {
  const id = req.params.id;
  Articles.update(req.body, {
    where: { id: id },
  }).then(([nbUpdated]) => {
    if (!nbUpdated) res.sendStatus(404);
    else Articles.findByPk(id).then((articles) => res.json(articles));
  });
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  Articles.destroy({
    where: { id: id },
  }).then((nbDeleted) => {
    if (!nbDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  });
});

router.post('/register', async function (req, res) {
    Articles.create(req.body).then((articles) => {
    res.status(201).json(articles);
  });
});

module.exports = router;
