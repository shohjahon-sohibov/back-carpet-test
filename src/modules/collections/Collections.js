const { sequelize, DataTypes } = require("../../lib/sequelize");

module.exports = {
    GET_COLLECTIONS: async (req, res) => {
        try {
            res.json("Colections")
        }catch(e) {
            console.log(e);
        }
    },
    POST_COLLECTION: async (req, res) => {
        try {
            
            const { name } = req.body

            let collection = name

            const Collection = sequelize.define(collection, {
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                      min: 1,
                    },
                  },
                  isNew: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                  },
                  isTop: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                  },
                  like: {
                    type: DataTypes.INTEGER,
                  },
                  dislike: {
                    type: DataTypes.INTEGER,
                  },
                  rating: {
                    type: DataTypes.INTEGER,
                  },
                  sell: DataTypes.INTEGER,  
                  imageUrl: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: {
                      args: true,
                      msg: "this name of image already in use!",
                    },
                  },
                  imageName: DataTypes.STRING,
                  imageType: DataTypes.STRING,
                  product_code: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                  },
                  collection_name: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                  },
                  in_market: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                  }
            })

            console.log(Collection, collection);

            res.json("ok")

        } catch (error) {
            console.log(error);
        }
    }
}