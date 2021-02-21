require("dotenv").config();
require("./db/knex");
const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./loaders/routes");
app.use("/api/v1", routes);

module.exports = app;
