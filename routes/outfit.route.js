const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const checkOwnerMiddleware = require('../middleware/check-owner')
const outfitApiController = require('../controllers/api/outfit.controller')

const router = express.Router()

router.get(
    '/get-by-user/:userId',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    outfitApiController.indexByUserId,
)
router.get(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkOutfitOwner,
    outfitApiController.showById,
)
router.post('/', checkAuthMiddleware.checkAuth, outfitApiController.create)
router.patch(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkOutfitOwner,
    outfitApiController.updateById,
)
router.delete(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkOutfitOwner,
    outfitApiController.deleteById,
)

module.exports = router
