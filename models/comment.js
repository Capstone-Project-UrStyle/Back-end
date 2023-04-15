'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, { foreignKey: 'user_id' })
            Comment.belongsTo(models.Outfit, { foreignKey: 'outfit_id' })
        }
    }
    Comment.init(
        {
            user_id: DataTypes.INTEGER,
            outfit_id: DataTypes.INTEGER,
            parrent_id: DataTypes.INTEGER,
            content: DataTypes.TEXT,
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
            modelName: 'Comment',
        },
    )
    return Comment
}
