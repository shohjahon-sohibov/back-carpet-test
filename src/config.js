require("dotenv").config();
const PORT = process.env.PORT || 8080;
// const SERVERLINK = "http://ec2-54-145-201-75.compute-1.amazonaws.com:8080/";

module.exports = {
  PORT,
  SERVERLINK: process.env.SERVER,
  elConnections: process.env.DB_CONNECTION,
  MERCHANT_ID: process.env.MERCHANT_ID,
  TEST_KEY: process.env.TEST_KEY,
  KEY: process.env.KEY,
};
