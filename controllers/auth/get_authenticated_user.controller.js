const { getUserById } = require('../CRUD/user')
const { countFollower, countFollowing } = require('../CRUD/follow')

async function getAuthenticatedUser(request, response) {
    try {
        // Get user id from JsonWebToken
        const userId = request.userData.userId

        // Check if user exists
        const dbUser = await getUserById(userId)
        if (dbUser) {
            const followerCount = await countFollower(userId)
            const followingCount = await countFollowing(userId)

            return response.status(200).json({
                ...JSON.parse(JSON.stringify(dbUser)),
                FollowerCount: followerCount,
                FollowingCount: followingCount,
            })
        } else {
            return response.status(404).json({
                message: 'User not found!',
            })
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = getAuthenticatedUser
