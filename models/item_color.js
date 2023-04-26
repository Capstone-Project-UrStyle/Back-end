'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ItemColor extends Model {
        static associate(models) {
            ItemColor.hasOne(models.Item, { foreignKey: 'item_id' })
            ItemColor.hasOne(models.Color, { foreignKey: 'color_id' })
        }
    }
    ItemColor.init(
        {
            item_id: DataTypes.INTEGER,
            color_id: DataTypes.INTEGER,
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
            modelName: 'ItemColor',
        },
    )
    return ItemColor
}
