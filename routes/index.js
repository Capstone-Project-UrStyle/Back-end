const auth = require('./auth.route')
const upload = require('./upload.route')
const masterData = require('./master-data.route')
const user = require('./user.route')
const closet = require('./closet.route')
const item = require('./item.route')
const lstmModel = require('./lstm-model.route')

module.exports = {
    auth: auth,
    upload: upload,
    masterData: masterData,
    user: user,
    closet: closet,
    item: item,
    lstmModel: lstmModel,
}
