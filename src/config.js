require('dotenv').config()

const PORT = process.env.PORT || 9000
const SERVERLINK = 'https://fierce-scrubland-73776.herokuapp.com/';

const MERCHANT_ID = "62864e6a72a6247c42008e13"
const TEST_KEY = "xEC0JxJ21%bxNkFOccMK5gfH06zcS0aG90Y%"
const KEY = "pN3GaXOf?DVPAyMeSs&GISr22Sv7&@@F@mNh"

module.exports = {
    PORT,
    SERVERLINK,
    elConnections: process.env.DB_CONNECTION,
    MERCHANT_ID,
    TEST_KEY,
    KEY
}