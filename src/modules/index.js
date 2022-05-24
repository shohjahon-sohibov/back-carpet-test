const express = require("express");
const router = express.Router();

const Users = require("./users/users");
const Products = require("./products/products");
const Comments = require("./comment/comment");
const Carpet_colections = require("./carpet_collections/carpet_colections");
const Tufting_collections = require("./tufting_collections/tufting_collections");
const Grass_collections = require("./grass_collections/grass_collections");
const News = require("./news/news");
const AboutHolding = require("./aboutHolding/aboutHolding");
const Branches = require("./branches/branches");
const Orders = require("./orders/orders");
const Brandes = require("./brand/brand");
const Jobs = require("./job/job");
const Transaction = require("./transaction/transaction");

// middlewares
const { AUTH_ROLE_MID, IS_VALID_TOKEN_MID } = require("../middlwares/jwt-helper");
const { 	uploadAboutHoldings, uploadBranches, uploadBrands, uploadNews, uploadCarpetCol, uploadTuftingCol, uploadGrassCol } = require("../middlwares/multer");

router
  .get("/users", Users.GET_USERS)
  .post("/register", AUTH_ROLE_MID, Users.REGISTER)
  .post("/login", IS_VALID_TOKEN_MID, Users.LOGIN)
  .delete("/deleteUser", Users.DELETE_ACCOUNT)

  // .get("/products", Products.GET_PRODUCTS)
  // .post("/newProduct", uploadProducts.single("poster"), Products.POST_PRODUCTS)
  // .put("/updateProduct", uploadProducts.single("poster"), Products.UPDATE_PRODUCT)
  // .delete("/deleteProduct", Products.DELETE_PRODUCT)
  
  .get("/comments", Comments.GET_COMMENTS)
  .post("/new-comment", Comments.POST_COMMENT)
  .put("/update-comment", Comments.UPDATE_COMMENT)
  .delete("/delete-comment", Comments.DELETE_COMMENT)

  .get("/api/carpet-collections", Carpet_colections.GET_CARPETS)
  .post("/api/new-carpet-collection", uploadCarpetCol.single("poster"), Carpet_colections.POST_COLLECTION)
  .put("/api/update-carpet-collection", uploadCarpetCol.single("poster"), Carpet_colections.UPDATE_COLLECTION)
  .delete("/api/delete-carpet-collection", Carpet_colections.DELETE_COLLECTION)

  .get("/api/tufting-collections", Tufting_collections.GET_COLLECTIONS)
  .post("/api/new-tufting-collection", uploadTuftingCol.single("poster"), Tufting_collections.POST_COLLECTION)
  .put("/api/update-tufting-collection", uploadTuftingCol.single("poster"), Tufting_collections.UPDATE_COLLECTION)
  .delete("/api/delete-tufting-collection", Tufting_collections.DELETE_COLLECTION)

  .get("/api/grass-collections", Grass_collections.GET_COLLECTIONS)
  .post("/api/new-grass-collection", uploadGrassCol.single("poster"), Grass_collections.POST_COLLECTION)
  .put("/api/update-grass-collection", uploadGrassCol.single("poster"), Grass_collections.UPDATE_COLLECTION)
  .delete("/api/delete-grass-collection", Grass_collections.DELETE_COLLECTION)

  .get("/news", News.GET_NEWS)
  .post("/newNews", uploadNews.single("poster"), News.POST_NEWS)
  .put("/updateNews", uploadNews.single("poster"), News.UPDATE_NEWS)
  .delete("/deleteNews", News.DELETE_NEWS)

  .get("/aboutHoldings", AboutHolding.GET_ABOUTHOLDING)
  .post("/newAboutHolding", uploadAboutHoldings.single("poster"), AboutHolding.POST_ABOUTHOLDING)
  .put("/updateAboutHolding", uploadAboutHoldings.single("poster"), AboutHolding.UPDATE_ABOUTHOLDING)
  .delete("/deleteAboutHolding", AboutHolding.DELETE_ABOUTHOLDING)

  .get("/Branches", Branches.GET_BRANCHES)
  .post("/newBranch", uploadBranches.single("poster"), Branches.POST_BRANCHES)
  .put("/updateBranch", uploadBranches.single("poster"), Branches.UPDATE_BRANCHES)
  .delete("/deleteBranch", Branches.DELETE_BRANCHES)

  .get("/orders", Orders.GET_ORDERS)
  .post("/transaction", Orders.POST_ORDER)
  .put("/updateOrder", Orders.UPDATE_ORDER)
  .delete("/deleteOrder", Orders.DELETE_ORDER)

  .get("/brands", Brandes.GET_BRANDS)
  .post("/newBrand", uploadBrands.single("poster"), Brandes.POST_BRAND)
  .delete("/deleteBrand", Brandes.DELETE_BRANDS)

  .get("/jobs", Jobs.GET_JOBS)
  .post("/new-job", Jobs.POST_JOB)
  .put("/update-job", Jobs.UPDATE_JOB)
  .delete("/delete-job", Jobs.DELETE_JOB)

  // .post("/transaction", Transaction.TRANSACTION)


module.exports = router;
