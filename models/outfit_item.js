'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class OutfitItem extends Model {
        static associate(models) {
            OutfitItem.belongsTo(models.Outfit, { foreignKey: 'outfit_id' })
            OutfitItem.belongsTo(models.Item, { foreignKey: 'item_id' })
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
