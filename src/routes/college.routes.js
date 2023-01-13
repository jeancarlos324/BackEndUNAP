const { Router } = require("express");
const { createCollege } = require("../controllers/college.controllers");

const collegeRouter = Router();

collegeRouter.post("/college", createCollege);
module.exports = collegeRouter;
