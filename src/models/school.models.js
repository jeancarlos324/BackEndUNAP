const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const School = db.define(
  "school",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collegeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "college_id",
    },
  },
  { timestamps: false }
);

module.exports = School;
