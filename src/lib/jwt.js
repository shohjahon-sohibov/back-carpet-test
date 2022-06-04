require('dotenv').config({  })
const { sign, verify } = require('jsonwebtoken')

const signUser = (payload) => sign(payload, process.env.SECRET_KEY)
const verifyUser = (token) => verify(token, process.env.SECRET_KEY)

module.exports = {
    signUser,
    verifyUser
}