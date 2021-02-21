require("express-async-errors");
require("dotenv").config();
require("./db/knex");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

const routes = require("./loaders/routes");

app.use("/api/v1", routes);

module.exports = app;
