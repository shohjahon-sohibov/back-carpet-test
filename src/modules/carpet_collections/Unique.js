const { Unique_collection } = require('../../model/Unique.collection')

module.exports = {
    GET_UNIQUE: async (_, res) => {
        try {
            res.json(await Unique_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}