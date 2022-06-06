const { Kasandra_collection } = require('../../model/Kasandra.collection')

module.exports = {
    GET_KASANDRA: async (_, res) => {
        try {
            res.json(await Kasandra_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}