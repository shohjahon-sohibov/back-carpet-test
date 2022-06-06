const { Feniks_collection } = require('../../model/Feniks.collection')

module.exports = {
    GET_FENIKS: async (_, res) => {
        try {
            res.json(await Feniks_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}