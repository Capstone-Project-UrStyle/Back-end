const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const checkOwnerMiddleware = require('../middleware/check-owner')
const itemApiController = require('../controllers/api/item.controller')

const router = express.Router()

router.get(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkItemOwner,
    itemApiController.showById,
)
router.post('/', checkAuthMiddleware.checkAuth, itemApiController.create)
router.patch(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkItemOwner,
    itemApiController.updateById,
)
router.delete(
    '/:id',
    checkAuthMiddleware.checkAuth,
    checkOwnerMiddleware.checkItemOwner,
    itemApiController.deleteById,
)

module.exports = router
