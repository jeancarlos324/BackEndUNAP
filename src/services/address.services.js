const Address = require("../models/address.models");

class AddressServices {
  static async create(newAddress) {
    try {
      const result = await Address.create(newAddress);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AddressServices;
