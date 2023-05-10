'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class OutfitOccasion extends Model {
        static associate(models) {
            OutfitOccasion.belongsTo(models.Outfit, { foreignKey: 'outfit_id' })
            OutfitOccasion.belongsTo(models.Occasion, {
                foreignKey: 'occasion_id',
            })
        }
    }
    OutfitOccasion.init(
        {
            outfit_id: DataTypes.INTEGER,
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
            modelName: 'OutfitOccasion',
        },
    )
    return OutfitOccasion
}
