const { Hermosa_collection } = require('../../model/Hermosa.collection')

module.exports = {
    GET_HERMOSA: async (_, res) => {
        try {
            res.json(await Hermosa_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}