const { checkIsClosetOwner } = require('../controllers/CRUD/closet')
const { checkIsItemOwner } = require('../controllers/CRUD/item')
const { checkIsOutfitOwner } = require('../controllers/CRUD/outfit')

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

async function checkItemOwner(request, response, next) {
    try {
        const itemId = request.params.id
        const requestUserId = request.userData.userId

        if (!checkIsItemOwner(itemId, requestUserId)) {
            return response.status(400).json({
                message: 'You are not the owner of this item!',
            })
        } else next()
    } catch (error) {
        return response.status(401).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function checkOutfitOwner(request, response, next) {
    try {
        const outfitId = request.params.id
        const requestUserId = request.userData.userId

        if (!checkIsOutfitOwner(outfitId, requestUserId)) {
            return response.status(400).json({
                message: 'You are not the owner of this item!',
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
    checkItemOwner: checkItemOwner,
    checkOutfitOwner: checkOutfitOwner,
}
