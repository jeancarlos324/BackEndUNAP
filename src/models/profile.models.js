const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Profile = db.define(
  "profile",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "last_name",
    },
    gender: {
      type: DataTypes.ENUM("Femenino", "Masculino", "Otros"),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    codORCID: {
      type: DataTypes.STRING,
      field: "COD_ORCID",
      unique: true,
    },
    dateBirth: {
      type: DataTypes.STRING,
      field: "date_birth",
      allowNull: false,
    },
    disability: {
      type: DataTypes.STRING,
      defaultValue: "No",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  { timestamps: false }
);

module.exports = Profile;
