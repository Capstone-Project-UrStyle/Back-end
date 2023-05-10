'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Occasion extends Model {
        static associate(models) {
            Occasion.belongsToMany(models.Closet, {
                through: models.ClosetOccasion,
                foreignKey: 'occasion_id',
            })
            Occasion.belongsToMany(models.Outfit, {
                through: models.OutfitOccasion,
                foreignKey: 'occasion_id',
            })
            Occasion.belongsToMany(models.Item, {
                through: models.ItemOccasion,
                foreignKey: 'occasion_id',
            })
        }
    }
    Occasion.init(
        {
            name: DataTypes.STRING,
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
            modelName: 'Occasion',
        },
    )
    return Occasion
}
