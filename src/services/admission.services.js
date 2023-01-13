const Admission = require("../models/admission.models");

class AdmissionServices {
  static async create(newAdmission) {
    try {
      const result = await Admission.create(newAdmission);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdmissionServices;
