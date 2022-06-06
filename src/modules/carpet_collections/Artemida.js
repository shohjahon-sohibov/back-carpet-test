const { Artemida_collection } = require('../../model/Artemida.collection')

module.exports = {
    GET_ARTEMIDA: async (_, res) => {
        try {
            res.json(await Artemida_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}