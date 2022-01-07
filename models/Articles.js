const { Model, DataTypes } = require("sequelize");
const connection = require("../lib/db");
const bcrypt = require("bcrypt");

class Articles extends Model {}

Articles.init(
  {authorId: {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
      
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    isAdmin: DataTypes.BOOLEAN,
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    tags: DataTypes.STRING,
  

    sequelize: connection,
    modelName: "Articles",
  }
);
connection.sync().then(() => {
  console.log("Database synced");
});
module.exports = Articles;
