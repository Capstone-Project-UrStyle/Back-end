'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class ItemOccasion extends Model {
        static associate(models) {
            ItemOccasion.hasOne(models.Item, { foreignKey: 'item_id' })
            ItemOccasion.hasOne(models.Occasion, { foreignKey: 'occasion_id' })
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
