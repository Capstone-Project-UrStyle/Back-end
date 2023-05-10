'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ItemOccasion extends Model {
        static associate(models) {
            ItemOccasion.belongsTo(models.Item, { foreignKey: 'item_id' })
            ItemOccasion.belongsTo(models.Occasion, {
                foreignKey: 'occasion_id',
            })
        }
    }
    ItemOccasion.init(
        {
            item_id: DataTypes.INTEGER,
            occasion_id: DataTypes.INTEGER,
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
            modelName: 'ItemOccasion',
        },
    )
    return ItemOccasion
}
