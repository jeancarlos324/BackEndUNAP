const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Admission = db.define(
  "admission",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    admissionMode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "admission_mode",
    },
    studyProgram: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "study_program",
    },
    processType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "process_type",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  { timestamps: false }
);

module.exports = Admission;
