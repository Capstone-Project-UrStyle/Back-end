'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        static associate(models) {
            Item.belongsTo(models.User, { foreignKey: 'user_id' })
            Item.belongsTo(models.Category, { foreignKey: 'category_id' })
            Item.belongsToMany(models.Closet, { through: models.ClosetItem })
            Item.belongsToMany(models.Outfit, { through: models.OutfitItem })
            Item.belongsToMany(models.Occasion, {
                through: models.ItemOccasion,
            })
            Item.belongsToMany(models.Color, { through: models.ItemColor })
            Item.belongsToMany(models.Material, {
                through: models.ItemMaterial,
            })
            Item.belongsToMany(models.Pattern, { through: models.ItemPattern })
        }
    }
    Item.init(
        {
            user_id: DataTypes.INTEGER,
            image: DataTypes.STRING,
            category_id: DataTypes.INTEGER,
            brand: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
            updatedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('updatedAt')) {
                        return toLocaleString(this.getDataValue('updatedAt'))
                    }
                    return null
                },
            },
        },
        {
            sequelize,
            modelName: 'Item',
        },
    )
    return Item
}
