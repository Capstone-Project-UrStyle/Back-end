'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Outfit extends Model {
        static associate(models) {
            Outfit.belongsTo(models.User, { foreignKey: 'user_id' })
            Outfit.hasMany(models.Like, { foreignKey: 'outfit_id' })
            Outfit.hasMany(models.Comment, { foreignKey: 'outfit_id' })
            Outfit.belongsToMany(models.Occasion, {
                through: models.OutfitOccasion,
                foreignKey: 'outfit_id',
            })
            Outfit.belongsToMany(models.Item, {
                through: models.OutfitItem,
                foreignKey: 'outfit_id',
            })
        }
    }
    Outfit.init(
        {
            user_id: DataTypes.INTEGER,
            image: DataTypes.STRING,
            selfies: DataTypes.TEXT,
            description: DataTypes.TEXT,
            is_public: DataTypes.BOOLEAN,
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
            modelName: 'Outfit',
        },
    )
    return Outfit
}
