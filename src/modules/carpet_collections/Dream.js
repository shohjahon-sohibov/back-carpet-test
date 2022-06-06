const { Dream_collection } = require('../../model/Dream.collection')

module.exports = {
    GET_DREAM: async (_, res) => {
        try {
            res.json(await Dream_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}