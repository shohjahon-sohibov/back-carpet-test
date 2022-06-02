const express = require("express");
const app = express();
const { PORT } = require("./config");
const modules = require("./modules");
const { sequelize } = require("./lib/sequelize");
const cors = require('cors');
const AuthMiddleware = require("./middlwares/AuthMiddleware");
const ErrorModifierMiddleware = require("./middlwares/ErrorModifierMiddleware");

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/public', express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(AuthMiddleware);
app.use(ErrorModifierMiddleware);

sequelize
  .sync({ force: false })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(modules);

app.listen({ port: PORT }, console.log(PORT));