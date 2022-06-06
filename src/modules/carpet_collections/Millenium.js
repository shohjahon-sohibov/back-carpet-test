const { Millenium_collection } = require('../../model/Millenium.collection')

module.exports = {
    GET_MILLENIUM: async (_, res) => {
        try {
            res.json(await Millenium_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}