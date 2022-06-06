const { Kenzo_collection } = require('../../model/Kenzo.collection')

module.exports = {
    GET_KENZO: async (_, res) => {
        try {
            res.json(await Kenzo_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}