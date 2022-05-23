const multer = require("multer");
const path = require("path");

const storageAboutHoldings = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/about_holdings"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageBranches = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/branches"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageBrands = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/brands"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageNews = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/news"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageCarpetCol = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/carpet_collections"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageTuftingCol = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/tufting_collections"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const storageGrassCol = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/grass_collections"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("");
    cb(null, name);
  },
});

const uploadAboutHoldings = multer({ storage: storageAboutHoldings });
const uploadBranches = multer({ storage: storageBranches });
const uploadBrands = multer({ storage: storageBrands });
const uploadNews = multer({ storage: storageNews });
const uploadCarpetCol = multer({ storage: storageCarpetCol });
const uploadTuftingCol = multer({ storage: storageTuftingCol });
const uploadGrassCol = multer({ storage: storageGrassCol });

module.exports = {
  uploadAboutHoldings,
  uploadBranches,
  uploadBrands,
  uploadNews,
  uploadCarpetCol,
  uploadTuftingCol,
  uploadGrassCol
};
