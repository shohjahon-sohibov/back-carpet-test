const { Camaro_collection } = require('../../model/Camaro.collection')

module.exports = {
    GET_CAMARO: async (_, res) => {
        try {
            res.json(await Camaro_collection.findAll())
        } catch (e) {
            console.log(e);
        }
    }
}