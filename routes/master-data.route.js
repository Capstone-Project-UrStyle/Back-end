const express = require('express')
const checkAuthMiddleware = require('../middleware/check-auth')
const masterDataApiController = require('../controllers/api/master-data.controller')

const router = express.Router()

router.get('/', checkAuthMiddleware.checkAuth, masterDataApiController.index)

module.exports = router
