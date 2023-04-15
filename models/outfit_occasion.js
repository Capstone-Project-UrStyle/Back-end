'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class OutfitOccasion extends Model {
        static associate(models) {
            OutfitOccasion.hasOne(models.Outfit, { foreignKey: 'outfit_id' })
            OutfitOccasion.hasOne(models.Occasion, {
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
