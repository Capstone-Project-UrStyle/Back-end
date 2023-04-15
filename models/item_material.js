'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class ItemMaterial extends Model {
        static associate(models) {
            ItemMaterial.hasOne(models.Item, { foreignKey: 'item_id' })
            ItemMaterial.hasOne(models.Material, { foreignKey: 'material_id' })
        }
    }
    ItemMaterial.init(
        {
            item_id: DataTypes.INTEGER,
            material_id: DataTypes.INTEGER,
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
            modelName: 'ItemMaterial',
        },
    )
    return ItemMaterial
}
