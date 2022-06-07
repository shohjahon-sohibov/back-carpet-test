const { Clients } = require("../../model/model");

module.exports = {
    GET_CLIENTS: async (req, res) => {
        try {
            res.status(200).json(await Clients.findAll())
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENT: async (req, res) => {
        try {
            const { id } = req.body

            await Clients.destroy({
                where: {
                    id
                }
            })

            res.status(200).json("ok")
        } catch (error) {
            console.log(error);
        }
    }
}