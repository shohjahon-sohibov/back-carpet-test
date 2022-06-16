const express = require("express");
const router = express.Router();
// Users
const Admin = require("./admin/admin");
const Clients = require("./clients/clients");
// Comments
const Carpet_comment = require("./comment/carpet_comment");
const Tufting_comment = require("./comment/tufting_comment");
const Grass_comment = require("./comment/grass_comment");
// collections data: size, price, in_market
const Carpet_infos = require("./Collection_infos/carpet_infos");
const Tufting_infos = require("./Collection_infos/tufting_infos");
const Grass_infos = require("./Collection_infos/grass_infos");
// Category collections: CARPET, TUFTING GRASS 
const Carpet_colections = require("./carpet_collections/carpet_colections");
const Tufting_collections = require("./tufting_collections/tufting_collections");
const Grass_collections = require("./grass_collections/grass_collections");

// const Collections = require('./collections/Collections') // add and delete collections

// =============  CARPET COLLECTIONS ===============
const Relax = require('./carpet_collections/Relax')
const Adele = require('./carpet_collections/Adele')
const Tresor = require('./carpet_collections/Tresor')
const Salvatini = require('./carpet_collections/Salvatini')
const Unique = require('./carpet_collections/Unique')
const Prince = require('./carpet_collections/Prince')
const Mustang = require('./carpet_collections/Mustang')
const Millenium = require('./carpet_collections/Millenium')
const Lindo = require('./carpet_collections/Lindo')
const Legenda = require('./carpet_collections/Legende')
const Kenzo = require('./carpet_collections/Kenzo')
const Kasandra = require('./carpet_collections/Kasandra')
const Hi_Tech = require('./carpet_collections/Hi-Tech')
const Hermosa = require('./carpet_collections/Hermosa')
const Feniks = require('./carpet_collections/Feniks')
const Dream = require('./carpet_collections/Dream')
const Diadema = require('./carpet_collections/Diadema')
const Camellia = require('./carpet_collections/Camellia')
const Camaro = require('./carpet_collections/Camaro')
const Artemida = require('./carpet_collections/Artemida')

// =============  TUFTING COLLECTIONS ===============
const Delta = require('./tufting_collections/Delta')
const Dior = require('./tufting_collections/Dior')
const Elis = require("./tufting_collections/Elis");
const Fendi = require("./tufting_collections/Fendi");
const Fresko = require("./tufting_collections/Fresko");
const Grafik = require("./tufting_collections/Grafik");
const Infiniti = require("./tufting_collections/Infiniti");
const Kobul = require("./tufting_collections/Kobul");
const Laguna = require("./tufting_collections/Laguna");
const Lexus = require("./tufting_collections/Lexus");
const Liberti = require("./tufting_collections/Liberti");
const Lufian = require("./tufting_collections/Lufian");
const Mars = require("./tufting_collections/Mars");
const Milano = require("./tufting_collections/Milano");
const Platan = require("./tufting_collections/Platan");
const Radisson = require("./tufting_collections/Radisson");
const Rodin = require("./tufting_collections/Rodin");
const Sadaf = require("./tufting_collections/Sadaf");
const Saturn = require("./tufting_collections/Saturn");
const Sparta = require("./tufting_collections/Sparta");
const Vesta = require("./tufting_collections/Vesta");


const Holiday = require("./tufting_collections/Holiday");
const Hilton = require("./tufting_collections/Hilton");
const Hayat = require("./tufting_collections/Hayat");
const Indigo = require("./tufting_collections/Indigo");
const Royal = require("./tufting_collections/Royal");
const Yaguar = require("./tufting_collections/Yaguar");
const Flower = require("./tufting_collections/Flower");


// Other Modules
const News = require("./news/news");
const AboutHolding = require("./aboutHolding/aboutHolding");
const Branches = require("./branches/branches");
const Orders = require("./orders/orders");
const Brandes = require("./brand/brand");
const Jobs = require("./job/job");
// Transaction
const Transaction = require("./transaction/transaction");

// middlewares
const { AUTH_ROLE_MID, IS_VALID_TOKEN_MID } = require("../middlwares/jwt-helper");
const {	uploadAboutHoldings, uploadBranches, uploadBrands, uploadNews, uploadCarpetCol, uploadTuftingCol, uploadGrassCol } = require("../middlwares/multer");
const middleware = require("../middlwares/AuthMiddleware");

router
  .get("/admins", Admin.GET_USERS)
  .post("/register", AUTH_ROLE_MID, Admin.REGISTER)
  .post("/login", IS_VALID_TOKEN_MID, Admin.LOGIN)
  .delete("/deleteUser", Admin.DELETE_ACCOUNT)

  .get("/api/clients", Clients.GET_USER)
  .put("/api/delete-client", Clients.DELETE_USER)
  .delete("/api/drop-client", Clients.DROP_USER)

  .get("/api/carpet-comments", Carpet_comment.GET_COMMENTS)
  .post("/api/new-carpet-comment", Carpet_comment.POST_COMMENT)
  .put("/api/update-carpet-comment", Carpet_comment.UPDATE_COMMENT)
  .delete("/api/delete-carpet-comment", Carpet_comment.DELETE_COMMENT)

    .get("/api/tufting-comments", Tufting_comment.GET_COMMENTS)
    .post("/api/new-tufting-comment", Tufting_comment.POST_COMMENT)
    .put("/api/update-tufting-comment", Tufting_comment.UPDATE_COMMENT)
    .delete("/api/delete-tufting-comment", Tufting_comment.DELETE_COMMENT)

    .get("/api/grass-comments", Grass_comment.GET_COMMENTS)
    .post("/api/new-grass-comment", Grass_comment.POST_COMMENT)
    .put("/api/update-grass-comment", Grass_comment.UPDATE_COMMENT)
    .delete("/api/delete-grass-comment", Grass_comment.DELETE_COMMENT)

  .get("/api/carpet_infos", Carpet_infos.GET_COLLECTION_INFOS)
  .post("/api/new-carpet_info", Carpet_infos.POST_COLLECTION_INFO)
  .put("/api/update-carpet_info", Carpet_infos.PUT_COLLECTION_INFO)
  .delete("/api/delete-carpet_info", Carpet_infos.DELETE_COLLECTION_INFO)

    .get("/api/tufting_infos", Tufting_infos.GET_COLLECTION_INFOS)
    .post("/api/new-tufting_info", Tufting_infos.POST_COLLECTION_INFO)
    // .put("/api/update-tufting_info", Tufting_infos.PUT_COLLECTION_INFO)
    .delete("/api/delete-tufting_info", Tufting_infos.DELETE_COLLECTION_INFO)

    .get("/api/grass_infos", Grass_infos.GET_COLLECTION_INFOS)
    .post("/api/new-grass_info", Grass_infos.POST_COLLECTION_INFO)
    .put("/api/update-grass_info", Grass_infos.PUT_COLLECTION_INFO)
    .delete("/api/delete-grass_info", Grass_infos.DELETE_COLLECTION_INFO)

  // .post("/api/new-collection", Collections.POST_COLLECTION)

  .get("/api/carpet-collections", Carpet_colections.GET_CARPETS)
  .post("/api/new-carpet-collection", uploadCarpetCol.single("poster"), Carpet_colections.POST_COLLECTION)
  .put("/api/update-carpet-collection", uploadCarpetCol.single("poster"), Carpet_colections.UPDATE_COLLECTION)
  .delete("/api/delete-carpet-collection", Carpet_colections.DELETE_COLLECTION)

  // CARPET COLLECTIONS
  .get("/api/relax", Relax.GET_RELAXES)
  .get("/api/adele", Adele.GET_ADELE)
  .get("/api/tresor", Tresor.GET_TRESORS)
  .get("/api/salvatini", Salvatini.GET_SALVATINI)
  .get("/api/unique", Unique.GET_UNIQUE)
  .get("/api/prince", Prince.GET_PRINCE)
  .get("/api/mustang", Mustang.GET_MUSTANG)
  .get("/api/millenium", Millenium.GET_MILLENIUM)
  .get("/api/lindo", Lindo.GET_LINDO)
  .get("/api/legenda", Legenda.GET_LEGENDA)
  .get("/api/kenzo", Kenzo.GET_KENZO)
  .get("/api/kasandra", Kasandra.GET_KASANDRA)
  .get("/api/hi-tech", Hi_Tech.GET_HI_TECH)
  .get("/api/hermosa", Hermosa.GET_HERMOSA)
  .get("/api/feniks", Feniks.GET_FENIKS)
  .get("/api/dream", Dream.GET_DREAM)
  .get("/api/diadema", Diadema.GET_DIADEMA)
  .get("/api/camellia", Camellia.GET_CAMELLIA)
  .get("/api/camaro", Camaro.GET_CAMARO)
  .get("/api/artemida", Artemida.GET_ARTEMIDA)

  // TUFTING COLLECTIONS
  .get("/api/delta", Delta.GET_DELTA)
  .get("/api/dior", Dior.GET_DIOR)
  .get("/api/elis", Elis.GET_ELIS)
  .get("/api/fendi", Fendi.GET_FENDI)
  .get("/api/fresko", Fresko.GET_FRESKO)
  .get("/api/grafik", Grafik.GET_GRAFIK)
  .get("/api/infiniti", Infiniti.GET_INFINITI)
  .get("/api/kobul", Kobul.GET_KOBUL)
  .get("/api/laguna", Laguna.GET_LAGUNA)
  .get("/api/lexus", Lexus.GET_LEXUS)
  .get("/api/liberti", Liberti.GET_LIBERTI)
  .get("/api/luftan", Lufian.GET_LUFIAN)
  .get("/api/mars", Mars.GET_MARS)
  .get("/api/milano", Milano.GET_MILANO)
  .get("/api/platan", Platan.GET_PLATAN)
  .get("/api/radisson", Radisson.GET_RADISSON)
  .get("/api/rodin", Rodin.GET_RODIN)
  .get("/api/sadaf", Sadaf.GET_SADAF)
  .get("/api/saturn", Saturn.GET_SATURN)
  .get("/api/sparta", Sparta.GET_SPARTA)
  .get("/api/vesta", Vesta.GET_VESTA)


  .get("/api/holiday", Holiday.GET_HOLIDAY)
  .get("/api/hilton", Hilton.GET_HILTON)
  .get("/api/hayat", Hayat.GET_HAYAT)
  .get("/api/indigo", Indigo.GET_INDIGO)
  .get("/api/royal", Royal.GET_ROYAL)
  .get("/api/yaguar", Yaguar.GET_YAGUAR)
  .get("/api/flower", Flower.GET_FLOWER)


  
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
  .post("/new-order", Orders.POST_ORDER)
  .put("/updateOrder", Orders.UPDATE_ORDER)
  .delete("/deleteOrder", Orders.DELETE_ORDER)

  .get("/brands", Brandes.GET_BRANDS)
  .post("/newBrand", uploadBrands.single("poster"), Brandes.POST_BRAND)
  .delete("/deleteBrand", Brandes.DELETE_BRANDS)

  .get("/jobs", Jobs.GET_JOBS)
  .post("/new-job", Jobs.POST_JOB)
  .put("/update-job", Jobs.UPDATE_JOB)
  .delete("/delete-job", Jobs.DELETE_JOB)

  .post("/transaction", [ middleware.AuthMiddleware, middleware.ErrorModifierMiddleware ], Transaction.HomePostController)

module.exports = router;
