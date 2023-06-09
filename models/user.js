'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasOne(models.UserInfo, { foreignKey: 'user_id' })
            User.hasOne(models.AuthKey, { foreignKey: 'user_id' })
            User.hasMany(models.Like, { foreignKey: 'user_id' })
            User.hasMany(models.Comment, { foreignKey: 'user_id' })
            User.hasMany(models.Bookmark, { foreignKey: 'user_id' })
            User.hasMany(models.Item, { foreignKey: 'user_id' })
            User.hasMany(models.Closet, { foreignKey: 'user_id' })
            User.hasMany(models.Follow, {
                foreignKey: 'follower_id',
                as: 'Followers',
            })
            User.hasMany(models.Follow, {
                foreignKey: 'following_id',
                as: 'Following',
            })
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
            password: DataTypes.STRING,
            is_verified: DataTypes.BOOLEAN,
            deletedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('deletedAt')) {
                        return toLocaleString(this.getDataValue('deletedAt'))
                    }
                    return null
                },
            },
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
            modelName: 'User',
        },
    )
    return User
}
