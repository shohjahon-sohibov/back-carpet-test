const { Prince_collection } = require('../../model/Prince.collection')

module.exports = {
    GET_PRINCE: async (_, res) => {
        try {
            res.json(await Prince_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}
