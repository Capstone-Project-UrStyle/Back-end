const auth = require('./auth.route')
const upload = require('./upload.route')
const user = require('./user.route')
const closet = require('./closet.route')
const item = require('./item.route')
const masterData = require('./master-data.route')

module.exports = {
    auth: auth,
    upload: upload,
    user: user,
    closet: closet,
    item: item,
    masterData: masterData,
}
