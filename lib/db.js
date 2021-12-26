const Sequelize = require("sequelize");

const connection = new Sequelize(
  "mariadb://root:root@localhost:3306/demo_user"
);

connection.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

module.exports = connection;
