const auth = require('./auth.route')
const upload = require('./upload.route')
const lstmModel = require('./lstm-model.route')
const masterData = require('./master-data.route')
const user = require('./user.route')
const closet = require('./closet.route')
const item = require('./item.route')
const outfit = require('./outfit.route')

module.exports = {
    auth: auth,
    upload: upload,
    lstmModel: lstmModel,
    masterData: masterData,
    user: user,
    closet: closet,
    item: item,
    outfit: outfit,
}
