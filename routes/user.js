const { Router } = require("express");
const User = require("../models/User");
const pool = require('../lib/db.js');
const bcrypt = require('bcrypt');
const router = new Router();
router.get("/users", (req, res) => {
  const criteria = req.query;
  User.findAll({
    attributes: ['id', 'firstname','lastname', 'email', 'createdAt', 'updatedAt','isAdmin'],
    where: criteria,
  }).then((users) => {
    res.json(users);
  });
});


router.post("/users", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).json(user);
  });
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByPk(id,{
    attributes: ['id', 'firstname','lastname', 'email', 'createdAt', 'updatedAt','isAdmin'],
  }).then((user) => {
    if (!user) res.sendStatus(404);
    else res.json(user);
    
  });
});

router.put("/users/:id", verifyJWT, (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  }).then(([nbUpdated]) => {
    if (!nbUpdated) res.sendStatus(404);
    else User.findByPk(id).then((user) => res.json(user));
  });
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  }).then((nbDeleted) => {
    if (!nbDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  });
});

router.post('/register', async function (req, res) {
  User.create(req.body).then((user) => {
    res.status(201).json(user);
  });
});

module.exports = router;
