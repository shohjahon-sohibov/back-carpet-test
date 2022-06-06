const { Mustang_collection } = require('../../model/Mustang.collection')

module.exports = {
    GET_MUSTANG: async (_, res) => {
        try {
            res.json(await Mustang_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}