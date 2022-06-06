const { Hi_Tech_collection } = require('../../model/Hi-Tech.collection')

module.exports = {
    GET_HI_TECH: async (_, res) => {
        try {
            res.json(await Hi_Tech_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}