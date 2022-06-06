const { Camellia_collection } = require('../../model/Camellia.collection')

module.exports = {
    GET_CAMELLIA: async (_, res) => {
        try {
            res.json(await Camellia_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}