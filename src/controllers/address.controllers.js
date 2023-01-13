const AddressServices = require("../services/address.services");

const createAddress = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await AddressServices.create(newUser);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

module.exports = { createAddress };
