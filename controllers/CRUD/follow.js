const models = require(process.cwd() + '/models/index')

async function indexFollowerByUserId(userId) {
    return models.Follow.findAll({
        where: {
            following_id: userId,
        },
        include: {
            model: models.User,
            as: 'Follower',
            attribute: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        },
    })
}

async function indexFollowingByUserId(userId) {
    return models.Follow.findAll({
        where: {
            follower_id: userId,
        },
        include: {
            model: models.User,
            as: 'FollowingUser',
            attribute: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        },
    })
}

async function countFollower(userId) {
    return models.Follow.count({ where: { following_id: userId } })
}

async function countFollowing(userId) {
    return models.Follow.count({ where: { follower_id: userId } })
}

async function create(newUserInfo) {
    return models.Follow.create(newUserInfo)
}

async function update(updateUserInfo, userId) {
    return models.Follow.update(updateUserInfo, { where: { user_id: userId } })
}

async function destroy(userId) {
    return models.Follow.destroy({ where: { user_id: userId } })
}

module.exports = {
    getListFollowerByUserId: indexFollowerByUserId,
    getListFollowingByUserId: indexFollowingByUserId,
    countFollower: countFollower,
    countFollowing: countFollowing,
    addNewUserInfo: create,
    updateUserInfoByUserId: update,
    deleteUserInfoByUserId: destroy,
}
