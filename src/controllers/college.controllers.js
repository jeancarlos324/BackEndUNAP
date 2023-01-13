const CollegeServices = require("../services/college.services");

const createCollege = async (req, res, next) => {
  try {
    const newCollege = req.body;
    const result = await CollegeServices.create(newCollege);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

module.exports = { createCollege };
