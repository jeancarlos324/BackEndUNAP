const { Router } = require("express");
const { createAdmission } = require("../controllers/admission.controllers");

const admissionRouter = Router();

admissionRouter.post("/admission", createAdmission);
module.exports = admissionRouter;
