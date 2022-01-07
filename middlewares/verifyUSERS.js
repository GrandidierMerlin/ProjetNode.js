const { verifyUSER } = require("../lib/db.js");

const verifyUSERS = (req, res, next) => {
  const header = req.headers["authorization"] ?? req.headers["Authorization"];
  if (!header) {
    res.sendStatus(401);
    return;
  }
  // format "Bearer ezfklzenfklze23423RZEDfé"
  const splittedToken = header.split(" ");
  const token = splittedToken[1];
  const user = verifyUSER(token);
  if (!user) {
    res.sendStatus(401);
    return;
  }
  req.user = user;
  next();
};

module.exports = verifyUSERS;