const { Grass_comments } = require("../../model/model");

module.exports = {
    GET_COMMENTS: async (_, res) => {
        try {
            res.json(await Grass_comments.findAll());
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    POST_COMMENT: async (req, res) => {
        try {
            const { body, product_id } = req.body;

            await Grass_comments.create({
                body,
                product_id
            });

            res.status(201).json("resource created successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    UPDATE_COMMENT: async (req, res) => {
        try {
            const { id, body, product_id } = req.body;

            if (id && body) {
                const findCommentsId = await Grass_comments.findOne({
                    where: {
                        id,
                    },
                });

                if (findCommentsId) {
                    await Grass_comments.update(
                        {
                            body,
                            product_id
                        },
                        {
                            where: {
                                id,
                            },
                        }
                    );

                    res.status(200).json("resource updated successfully");
                } else {
                    res.status(404).json("Not found");
                }
            } else {
                res.status(500).json("key is not provided");
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    DELETE_COMMENT: async (req, res) => {
        try {
            const { id } = req.body;
            const deletedComment = await Grass_comments.destroy({
                where: {
                    id,
                },
            });

            if(!deletedComment) {
                res.status(400).json("error in deleted")
            } else {
                res.status(200).json("resource deleted successfully");
            }

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
