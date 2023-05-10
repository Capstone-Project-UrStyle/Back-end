const hashHelper = require(process.cwd() +
    '/helpers/password-encrypter/hash_helper')
const validators = require(process.cwd() + '/helpers/validators')
const { transporter, mailConfig } = require(process.cwd() +
    '/helpers/mailer/transporter')
const uuid = require('uuid')

const { getUserByEmail, addNewUser } = require('../CRUD/user')
const { addNewUserInfo } = require('../CRUD/user_info')
const { addNewCloset } = require('../CRUD/closet')
const { addNewAuthKey } = require('../CRUD/authkey')

// Mail options
const VERIFY_EMAIL = 1

async function register(request, response) {
    try {
        // Check if email already registered
        const dbUser = await getUserByEmail(request.body.email)
        if (dbUser) {
            return response.status(409).json({
                message: 'Email already exists!',
            })
        }

        // Create new user
        const newUser = {
            name: request.body.name,
            email: request.body.email,
            password: hashHelper.hash(request.body.password),
        }

        // Validate new user's data
        const validateResponse = validators.validateUser(newUser)
        if (validateResponse !== true) {
            return response.status(400).json({
                message: 'Validation failed!',
                errors: validateResponse,
            })
        }

        // Add new user to database
        addNewUser(newUser).then((result) => {
            // Create new user info
            const newUserInfo = {
                user_id: result.id,
                avatar: 'public/images/avatars/default-avatar.png',
            }
            addNewUserInfo(newUserInfo)

            // Create first closet of user contains all items
            const newCloset = {
                user_id: result.id,
                name: 'All items',
                is_public: false,
            }
            addNewCloset(newCloset)

            // Send email to verify user
            const authKey = uuid.v1()
            transporter.sendMail(
                mailConfig(result.email, VERIFY_EMAIL, authKey),
                function (err, info) {
                    if (err) console.log(err)
                    else
                        console.log(
                            'Email sended successfully! Info: ' + info.response,
                        )
                },
            )

            // Save authKey
            const newAuthKey = {
                user_id: result.id,
                key: authKey,
            }
            addNewAuthKey(newAuthKey)

            return response.status(200).json({
                message: 'Register successfully!',
            })
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = register
