const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const closetApiController = require('../controllers/api/occasion.controller')

const router = express.Router()

router.get(
    '/',
    checkAuthMiddleware.checkAuth,
    closetApiController.index,
)

module.exports = router
