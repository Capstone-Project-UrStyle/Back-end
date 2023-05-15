const userSchema = {
    name: { type: 'string', optional: true },
    email: { type: 'string', optional: true },
    password: { type: 'string', optional: true },
    is_verified: { type: 'boolean', optional: true },
    deleted_at: { type: 'string', optional: true },
}

const userInfoSchema = {
    user_id: { type: 'number', optional: true },
    avatar: { type: 'string', optional: true },
    birthday: { type: 'string', optional: true },
    address: { type: 'string', optional: true },
    phone_number: { type: 'string', optional: true },
    gender: { type: 'number', optional: true },
}

const closetSchema = {
    user_id: { type: 'number', optional: true },
    name: { type: 'string', optional: true },
    is_public: { type: 'boolean', optional: true },
}

module.exports = {
    userSchema: userSchema,
    userInfoSchema: userInfoSchema,
    closetSchema: closetSchema,
}
