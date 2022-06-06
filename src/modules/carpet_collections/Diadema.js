const { Diadema_collection } = require('../../model/Diadema.collection')

module.exports = {
    GET_DIADEMA: async (_, res) => {
        try {
            res.json(await Diadema_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}