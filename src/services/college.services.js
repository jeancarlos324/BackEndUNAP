const College = require("../models/college.models");
const School = require("../models/school.models");

class CollegeServices {
  static async create(newCollege) {
    try {
      const { userId, name, school } = newCollege;
      const college = await College.create({ userId, name });
      const { id } = college;
      if (!id) return null;
      await School.create({ name: school.name, collegeId: id });
      return college;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CollegeServices;
