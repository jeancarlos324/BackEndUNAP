const { Router } = require("express");
const {
  findUser,
  searchUser,
  createUser,
} = require("../controllers/users.controllers");
const validateUser = require("../middlewares/user.middlewares");

const userRouter = Router();

userRouter.get("/users/:id", findUser);
userRouter.get("/users", searchUser);
userRouter.post("/users", validateUser, createUser);

module.exports = userRouter;
