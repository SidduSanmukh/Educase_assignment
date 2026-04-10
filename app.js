const express = require("express");
require("dotenv").config();
const cors = require("cors");
const schoolRoutes = require("./src/routes/schoolRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const helmet = require("helmet");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/public", "index.html"));
});

app.use("/api", schoolRoutes);
// log file
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// Using the Morgan with file logging
app.use(morgan("combined", { stream: logStream }));

module.exports = app;
