const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const checkOwnerMiddleware = require('../middleware/check-owner')
const closetApiController = require('../controllers/api/closet.controller')

const router = express.Router()

router.get(
    '/get-by-user/:userId',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    closetApiController.indexByUserId,
)
router.get(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkClosetOwner,
    closetApiController.showById,
)
router.post('/', checkAuthMiddleware.checkAuth, closetApiController.create)
router.patch(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkClosetOwner,
    closetApiController.updateById,
)
router.delete(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkClosetOwner,
    closetApiController.deleteById,
)

module.exports = router
