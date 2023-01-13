const AdmissionServices = require("../services/admission.services");

const createAdmission = async (req, res, next) => {
  try {
    const newAdmission = req.body;
    const result = await AdmissionServices.create(newAdmission);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

module.exports = { createAdmission };
