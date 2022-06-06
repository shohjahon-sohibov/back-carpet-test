const { Legenda_collection } = require('../../model/Legenda.collection')

module.exports = {
    GET_LEGENDA: async (_, res) => {
        try {
            res.send(await Legenda_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}