const { Router } = require("express");
const {
  findUser,
  searchUser,
  createUser,
  createManyUsers,
} = require("../controllers/users.controllers");
const validateUser = require("../middlewares/user.middlewares");

const userRouter = Router();

userRouter.get("/users/:id", findUser);
userRouter.get("/users", searchUser);
userRouter.post("/users", validateUser, createUser);
userRouter.post("/users/many", createManyUsers);

module.exports = userRouter;
