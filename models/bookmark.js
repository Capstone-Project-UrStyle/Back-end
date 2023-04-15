'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Bookmark extends Model {
        static associate(models) {
            Bookmark.belongsTo(models.User, { foreignKey: 'user_id' })
        }
    }
    Bookmark.init(
        {
            user_id: DataTypes.INTEGER,
            bookmarked_id: DataTypes.INTEGER,
            is_outfit: DataTypes.BOOLEAN,
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
            modelName: 'Bookmark',
        },
    )
    return Bookmark
}
