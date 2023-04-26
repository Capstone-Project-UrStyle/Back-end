'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ItemPattern extends Model {
        static associate(models) {
            ItemPattern.hasOne(models.Item, { foreignKey: 'item_id' })
            ItemPattern.hasOne(models.Pattern, { foreignKey: 'pattern_id' })
        }
    }
    ItemPattern.init(
        {
            item_id: DataTypes.INTEGER,
            pattern_id: DataTypes.INTEGER,
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
            modelName: 'ItemPattern',
        },
    )
    return ItemPattern
}
