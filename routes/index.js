const auth = require('./auth.route')
const upload = require('./upload.route')
const user = require('./user.route')
const closet = require('./closet.route')
const occasion = require('./occasion.route')

module.exports = {
    auth: auth,
    upload: upload,
    user: user,
    closet: closet,
    occasion: occasion,
}
