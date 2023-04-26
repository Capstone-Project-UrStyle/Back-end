'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ClosetItem extends Model {
        static associate(models) {
            ClosetItem.hasOne(models.Closet, { foreignKey: 'closet_id' })
            ClosetItem.hasOne(models.Item, { foreignKey: 'item_id' })
        }
    }
    ClosetItem.init(
        {
            closet_id: DataTypes.INTEGER,
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
            modelName: 'ClosetItem',
        },
    )
    return ClosetItem
}
