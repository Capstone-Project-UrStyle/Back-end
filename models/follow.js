'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Follow extends Model {
        static associate(models) {
            Follow.belongsTo(models.User, {
                foreignKey: 'follower_id',
                as: 'Follower',
            })
            Follow.belongsTo(models.User, {
                foreignKey: 'following_id',
                as: 'FollowingUser',
            })
        }
    }
    Follow.init(
        {
            follower_id: DataTypes.INTEGER,
            following_id: DataTypes.INTEGER,
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
            modelName: 'Follow',
        },
    )
    return Follow
}
