const { Adele_collection } = require('../../model/Adele.collection')

module.exports = {
    GET_ADELE: async (_, res) => {
        try {
            res.json(await Adele_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}