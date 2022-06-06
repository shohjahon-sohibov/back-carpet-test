const { Salvatini_collection } = require('../../model/Salvatini.collection')

module.exports = {
    GET_SALVATINI: async (_, res) => {
        try {
            res.json(await Salvatini_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}