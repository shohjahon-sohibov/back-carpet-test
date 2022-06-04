const express = require("express");
const app = express();
const { PORT } = require("./config");
const modules = require("./modules");
const { sequelize } = require("./lib/sequelize");
const cors = require('cors')
const ejs = require('ejs')

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync({ force: false })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(modules);

app.use('*', (_, res) => {
   res.json("wrong endpoint, sorry :(")
})

app.listen({ port: PORT }, console.log(PORT));