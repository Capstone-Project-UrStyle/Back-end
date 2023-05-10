'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ItemMaterial extends Model {
        static associate(models) {
            ItemMaterial.belongsTo(models.Item, { foreignKey: 'item_id' })
            ItemMaterial.belongsTo(models.Material, {
                foreignKey: 'material_id',
            })
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
