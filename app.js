const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

app.use(express.json())

app.use('/public', express.static('public'))

app.use('/api/auth', routes.auth)
app.use('/api/upload', routes.upload)
app.use('/api/lstm-model/', routes.lstmModel)
app.use('/api/master-data', routes.masterData)
app.use('/api/users', routes.user)
app.use('/api/closets', routes.closet)
app.use('/api/items', routes.item)
app.use('/api/outfits', routes.outfit)

module.exports = app
