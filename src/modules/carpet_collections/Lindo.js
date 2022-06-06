const { Lindo_collection } = require('../../model/Lindo.collection')

module.exports = {
    GET_LINDO: async (_, res) => {
        try {
            res.json(await Lindo_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}