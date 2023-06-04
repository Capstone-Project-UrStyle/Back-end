const FastestValidator = require('fastest-validator')
const validator = new FastestValidator()

// Schemas
const schemas = require('./schemas')

// Validate functions
const validateUser = (user) => validator.validate(user, schemas.userSchema)
const validateUserInfo = (userInfo) =>
    validator.validate(userInfo, schemas.userInfoSchema)
const validateCloset = (closet) =>
    validator.validate(closet, schemas.closetSchema)
const validateItem = (item) => validator.validate(item, schemas.itemSchema)

module.exports = {
    validateUser: validateUser,
    validateUserInfo: validateUserInfo,
    validateCloset: validateCloset,
    validateItem: validateItem,
}
