const { Model, DataTypes } = require("sequelize");
const connection = require("../lib/db");
const bcrypt = require("bcrypt");

class Comments extends Model {}

Comment.init(
  {
    authorId: DataTypes.INTEGER,
    
    author:{
        lastname: DataTypes.STRING,
        firstname: DataTypes.STRING,
    },
    
    articleId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    sequelize: connection,
    modelName: "Comment",
  }
);
connection.sync().then(() => {
  console.log("Database synced");
});
module.exports = Comment;
