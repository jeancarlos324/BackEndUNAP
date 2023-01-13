const Profile = require("../models/profile.models");
const User = require("../models/user.models");
const UserData = require("../models/userInfo.models");

const validateUser = async (req, res, next) => {
  try {
    const { documentIdentity, codORCID, phone } = req.body;
    const verifyCod = await Profile.findAll({
      attributes: ["codORCID", "phone"],
    });
    const verifyUser = await User.findOne({ where: { documentIdentity } });
    console.log(verifyUser);
    const arrayCod = verifyCod.map((a) => a.dataValues.codORCID);
    const arrayPhone = verifyCod.map((a) => a.dataValues.phone);
    if (arrayCod.includes(codORCID)) {
      res.status(400).json({ codORCID, status: false });
    } else if (arrayPhone.includes(phone)) {
      res.status(400).json({ phone, status: false });
    } else if (verifyUser) {
      res.status(400).json({ documentIdentity, status: false });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

module.exports = validateUser;
