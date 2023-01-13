const morgan = require("morgan");
const express = require("express");

const db = require("./utils/db");
const initModels = require("./models/initModels");
const userRouter = require("./routes/user.routes");
const addressRouter = require("./routes/address.routes");
const admissionRouter = require("./routes/admission.routes");
const collegeRouter = require("./routes/college.routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

initModels();

db.authenticate()
  .then(() => console.log("auth ok"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

//Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", addressRouter);
app.use("/api/v1", admissionRouter);
app.use("/api/v1", collegeRouter);

app.get("/", (request, response) => {
  response.status(200).json({ message: "ok" });
});

module.exports = app;
