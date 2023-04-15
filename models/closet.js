'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Closet extends Model {
        static associate(models) {
            Closet.belongsTo(models.User, { foreignKey: 'user_id' })
            Closet.belongsToMany(models.Occasion, {
                through: models.ClosetOccasion,
            })
            Closet.belongsToMany(models.Item, { through: models.ClosetItem })
        }
    }
    Closet.init(
        {
            user_id: DataTypes.INTERGER,
            name: DataTypes.STRING,
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
            modelName: 'Closet',
        },
    )
    return Closet
}
