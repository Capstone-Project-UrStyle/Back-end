'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        static associate(models) {
            Item.belongsTo(models.User, { foreignKey: 'user_id' })
            Item.belongsTo(models.Category, { foreignKey: 'category_id' })
            Item.belongsToMany(models.Occasion, {
                through: models.ItemOccasion,
                foreignKey: 'item_id',
            })
            Item.belongsToMany(models.Closet, {
                through: models.ClosetItem,
                foreignKey: 'item_id',
            })
            Item.belongsToMany(models.Outfit, {
                through: models.OutfitItem,
                foreignKey: 'item_id',
            })
            Item.belongsToMany(models.Color, {
                through: models.ItemColor,
                foreignKey: 'item_id',
            })
            Item.belongsToMany(models.Material, {
                through: models.ItemMaterial,
                foreignKey: 'item_id',
            })
            Item.belongsToMany(models.Pattern, {
                through: models.ItemPattern,
                foreignKey: 'item_id',
            })
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
