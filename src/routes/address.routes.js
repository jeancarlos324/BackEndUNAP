const { Router } = require("express");
const { createAddress } = require("../controllers/address.controllers");

const addressRouter = Router();

// addressRouter.get("/users/:id", findUser);
// addressRouter.get("/users", searchUser);
addressRouter.post("/address", createAddress);

module.exports = addressRouter;
