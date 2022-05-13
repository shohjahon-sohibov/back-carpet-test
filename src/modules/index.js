const express = require("express");
const router = express.Router();

const Users = require("./users/users");
const Products = require("./products/products");
const News = require("./news/news");
const AboutHolding = require("./aboutHolding/aboutHolding");
const Branches = require("./branches/branches");
const Orders = require("./orders/orders");
const Brandes = require("./brand/brand");
const Jobs = require("./job/job");

// middlewares
const { AUTH_ROLE_MID, IS_VALID_TOKEN_MID } = require("../middlwares/jwt-helper");
const upload = require("../middlwares/multer");

router
  .get("/users", Users.GET_USERS)
  .post("/register", AUTH_ROLE_MID, Users.REGISTER)
  .post("/login", IS_VALID_TOKEN_MID, Users.LOGIN)
  .delete("/deleteUser", Users.DELETE_ACCOUNT)

  .get("/products", Products.GET_PRODUCTS)
  .post("/newProduct", upload.single("poster"), Products.POST_PRODUCTS)
  .put("/updateProduct", upload.single("poster"), Products.UPDATE_PRODUCT)
  .delete("/deleteProduct", Products.DELETE_PRODUCT)

  .get("/news", News.GET_NEWS)
  .post("/newNews", upload.single("poster"), News.POST_NEWS)
  .put("/updateNews", upload.single("poster"), News.UPDATE_NEWS)
  .delete("/deleteNews", News.DELETE_NEWS)

  .get("/aboutHoldings", AboutHolding.GET_ABOUTHOLDING)
  .post("/newAboutHolding", upload.single("poster"), AboutHolding.POST_ABOUTHOLDING)
  .put("/updateAboutHolding", upload.single("poster"), AboutHolding.UPDATE_ABOUTHOLDING)
  .delete("/deleteAboutHolding", AboutHolding.DELETE_ABOUTHOLDING)

  .get("/Branches", Branches.GET_BRANCHES)
  .post("/newBranch", upload.single("poster"), Branches.POST_BRANCHES)
  .put("/updateBranch", upload.single("poster"), Branches.UPDATE_BRANCHES)
  .delete("/deleteBranch", Branches.DELETE_BRANCHES)

  .get("/orders", Orders.GET_ORDERS)
  .post("/postOrder", upload.single("poster"), Orders.POST_ORDER)
  .put("/updateOrder", upload.single("poster"), Orders.UPDATE_ORDER)
  .delete("/deleteOrder", Orders.DELETE_ORDER)

  .get("/brands", Brandes.GET_BRANDS)
  .post("/newBrand", upload.single("poster"), Brandes.POST_BRAND)
  .delete("/deleteBrand", Brandes.DELETE_BRANDS)

  .get("/jobs", Jobs.GET_JOBS)
  .post("/new-job", Jobs.POST_JOB)
  .put("/update-job", Jobs.UPDATE_JOB)
  .delete("/delete-job", Jobs.DELETE_JOB)

module.exports = router;
