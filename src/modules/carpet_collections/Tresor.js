const { Tresor_collection } = require('../../model/Tresor.collection')

module.exports = {
    GET_TRESORS: async (_, res) => {
        try {
            res.json(await Tresor_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}