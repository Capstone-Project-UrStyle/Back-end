const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const lstmModelController = require('../controllers/api/lstm-model.controller')

const router = express.Router()

router.post(
    '/generate-item-recommendations',
    checkAuthMiddleware.checkAuth,
    lstmModelController.getItemRecommendations,
)

router.post(
    '/generate-outfit-recommendations',
    checkAuthMiddleware.checkAuth,
    lstmModelController.getOutfitRecommendations,
)

module.exports = router
