const Address = require("./address.models");
const Admission = require("./admission.models");
const College = require("./college.models");
const Profile = require("./profile.models");
const School = require("./school.models");
const User = require("./user.models");
const UserData = require("./userInfo.models");

const initModels = () => {
  Profile.belongsTo(User, {
    as: "user",
    foreignKey: "user_id",
    onDelete: "cascade",
  });
  User.hasOne(Profile, { as: "profile", foreignKey: "user_id" });

  Address.belongsTo(User, { foreignKey: "user_id", onDelete: "cascade" });
  User.hasOne(Address, { as: "location", foreignKey: "user_id" });

  Admission.belongsTo(User, { foreignKey: "user_id", onDelete: "cascade" });
  User.hasOne(Admission, { as: "admission", foreignKey: "user_id" });

  College.belongsTo(User, { foreignKey: "user_id", onDelete: "cascade" });
  User.hasOne(College, { as: "facultad", foreignKey: "user_id" });

  School.belongsTo(College, {
    as: " facultade",
    foreignKey: "college_id",
    onDelete: "cascade",
  });
  College.hasMany(School, { as: "escuela", foreignKey: "college_id" });
};

module.exports = initModels;
