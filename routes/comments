const { Router } = require("express");
const Comments = require("../models/Comments");
const pool = require('../lib/db.js');
const bcrypt = require('bcrypt');
const router = new Router();
router.get("/comments", (req, res) => {
  const criteria = req.query;
  Comments.findAll({
    attributes: ['id', 'firstname', 'lastname', 'articleId', 'deletedAt', 'createdAt', 'updatedAt','isAdmin'],
    where: criteria,
  }).then((users) => {
    res.json(users);
  });
});


router.post("/comments", (req, res) => {
  Comments.create(req.body).then((user) => {
    res.status(201).json(user);
  });
});

router.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  Comments.findByPk(id,{
    attributes: ['id', 'firstname', 'lastname', 'articleId', 'deletedAt', 'createdAt', 'updatedAt','isAdmin'],
  }).then((Comments) => {
    if (!user) res.sendStatus(404);
    else res.json(Comments);
    
  });
});

router.put("/comments/:id", (req, res) => {
  const id = req.params.id;
  Comments.update(req.body, {
    where: { id: id },
  }).then(([nbUpdated]) => {
    if (!nbUpdated) res.sendStatus(404);
    else Comments.findByPk(id).then((user) => res.json(user));
  });
});

router.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { id: id },
  }).then((nbDeleted) => {
    if (!nbDeleted) res.sendStatus(404);
    else res.sendStatus(204);
  });
});

router.post('/register', async function (req, res) {
  Comments.create(req.body).then((user) => {
    res.status(201).json(user);
  });
});

module.exports = router;
