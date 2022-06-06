const { Relax_collection } = require('../../model/Relax.collection')

module.exports = {
    GET_RELAXES: async (_, res) => {
        try {
            res.json(await Relax_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}