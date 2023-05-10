const { checkIsClosetOwner } = require('../controllers/CRUD/closet')

async function checkAccountOwner(request, response, next) {
    try {
        const userId = request.params.userId
        const requestUserId = request.userData.userId

        if (requestUserId != userId) {
            return response.status(400).json({
                message: 'You are not the owner of this account!',
            })
        } else next()
    } catch (error) {
        return response.status(401).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function checkClosetOwner(request, response, next) {
    try {
        const closetId = request.params.id
        const requestUserId = request.userData.userId

        if (!checkIsClosetOwner(closetId, requestUserId)) {
            return response.status(400).json({
                message: 'You are not the owner of this closet!',
            })
        } else next()
    } catch (error) {
        return response.status(401).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    checkAccountOwner: checkAccountOwner,
    checkClosetOwner: checkClosetOwner,
}
