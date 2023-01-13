const Address = require("../models/address.models");
const Admission = require("../models/admission.models");
const College = require("../models/college.models");
const Profile = require("../models/profile.models");
const School = require("../models/school.models");
const User = require("../models/user.models");
const UserData = require("../models/userInfo.models");

class UserServices {
  static async get(id) {
    try {
      const result = await User.findOne({
        where: { id },
        attributes: {
          exclude: ["updatedAt"],
        },
        include: [
          {
            model: Profile,
            as: "profile",
            attributes: { exclude: ["id", "userId", "user_id"] },
          },
          {
            model: Address,
            as: "location",
            attributes: { exclude: ["id", "userId", "user_id"] },
          },
          {
            model: Admission,
            as: "admission",
            attributes: { exclude: ["id", "userId", "user_id"] },
          },
          {
            model: College,
            as: "facultad",
            attributes: { exclude: ["id", "userId", "user_id"] },
            include: {
              model: School,
              as: "escuela",
              attributes: { exclude: ["id", "collegeId", "college_id"] },
            },
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async search(documentIdentity) {
    try {
      const result = await UserData.findOne({
        where: { documentIdentity },
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(data) {
    try {
      const { documentIdentity, typeIdentity, email, password, ...profile } =
        data;
      const verifyUser = await UserData.findOne({
        where: { documentIdentity },
      });
      if (!verifyUser) return false;
      const newUser = await User.create({
        documentIdentity,
        typeIdentity: verifyUser.typeIdentity,
        email: verifyUser.email,
        password,
      });
      const { id } = newUser;
      if (!id) return null;
      const newProfile = {
        ...profile,
        firstName: verifyUser.firstName,
        lastName: verifyUser.lastName,
        userId: newUser.id,
      };
      await Profile.create(newProfile);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
