const express = require("express");
const app = express();
const { PORT } = require("./config");
const modules = require("./modules");
const { sequelize } = require("./lib/sequelize");
const cors = require('cors');

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/public', express.static('public'))

sequelize
  .sync({ force: false })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(modules);

app.listen({ port: PORT }, console.log(PORT));
