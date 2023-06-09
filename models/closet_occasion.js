'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class ClosetOccasion extends Model {
        static associate(models) {
            ClosetOccasion.belongsTo(models.Closet, { foreignKey: 'closet_id' })
            ClosetOccasion.belongsTo(models.Occasion, {
                foreignKey: 'occasion_id',
            })
        }
    }
    ClosetOccasion.init(
        {
            closet_id: DataTypes.INTEGER,
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
            modelName: 'ClosetOccasion',
        },
    )
    return ClosetOccasion
}
