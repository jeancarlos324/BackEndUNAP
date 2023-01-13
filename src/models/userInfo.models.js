const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const UserData = db.define("user_data", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  documentIdentity: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  typeIdentity: {
    type: DataTypes.ENUM("DNI", "PASSPORT"),
    allowNull: false,
    defaultValue: "DNI",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  firstName: {
    field: "first_name",
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    field: "last_name",
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UserData;
