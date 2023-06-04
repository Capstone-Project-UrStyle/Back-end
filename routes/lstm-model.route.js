const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const lstmModelController = require('../controllers/api/lstm-model.controller')

const router = express.Router()

router.get(
    '/generate-outfit-recommendation',
    checkAuthMiddleware.checkAuth,
    lstmModelController.getOutfitRecommendation,
)

router.get(
    '/predict-fashion-compatibility',
    checkAuthMiddleware.checkAuth,
    lstmModelController.getOutfitCompatibility,
)

module.exports = router
