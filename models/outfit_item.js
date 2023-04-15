'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class OutfitItem extends Model {
        static associate(models) {
            OutfitItem.hasOne(models.Outfit, { foreignKey: 'outfit_id' })
            OutfitItem.hasOne(models.Item, { foreignKey: 'item_id' })
        }
    }
    OutfitItem.init(
        {
            outfit_id: DataTypes.INTEGER,
            item_id: DataTypes.INTEGER,
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
            modelName: 'OutfitItem',
        },
    )
    return OutfitItem
}
