const UserServices = require("../services/user.services");

const findUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.get(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

const searchUser = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log(search);
    const result = await UserServices.search(search);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    if (result) {
      res.status(200).json(result);
    } else if (result == false) {
      res
        .status(400)
        .json({ error: "User does not exist in records", status: false });
    } else {
      res.status(400).json({ error: result, status: false });
    }
  } catch (error) {
    res.status(400).json({ error, status: false });
  }
};

module.exports = { findUser, searchUser, createUser };
