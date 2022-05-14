const multer = require("multer")
const path = require("path")

const storageAboutHoldings = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/about_holdings"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const storageBranches = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/branches"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const storageBrands = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/brands"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const storageNews = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/news"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const storageOrders = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/orders"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const storageProducts = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/uploads/products"))
	},

	filename: function (req, file, cb) {
		const name = file.originalname.split(" ").join("")
		cb(null, name);
	},
});

const uploadAboutHoldings = multer({storage: storageAboutHoldings});
const uploadBranches = multer({storage: storageBranches});
const uploadBrands = multer({storage: storageBrands});
const uploadNews = multer({storage: storageNews});
const uploadOrders = multer({storage: storageOrders});
const uploadProducts = multer({storage: storageProducts});

module.exports = {
	uploadAboutHoldings,
	uploadBranches,
	uploadBrands,
	uploadNews,
	uploadOrders,
	uploadProducts
}
	