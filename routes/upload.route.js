const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const checkOwnerMiddleware = require('../middleware/check-owner')

const uploadHelpers = require('../helpers/uploaders')
const uploadControllers = require('../controllers/upload')

const router = express.Router()

router.post(
    '/avatar/user/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    uploadHelpers.userAvatarUploader,
    uploadControllers.userAvatarController,
)

router.post(
    '/image/item/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    uploadHelpers.itemImageUploader,
    // uploadControllers.itemImageController,
)

router.post(
    '/image/outfit/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    uploadHelpers.outfitImageUploader,
    // uploadControllers.userAvatarController,
)

module.exports = router
