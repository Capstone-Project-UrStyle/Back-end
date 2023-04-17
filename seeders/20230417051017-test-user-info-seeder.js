'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'UserInfos',
            [
                {
                    user_id: 1,
                    avatar: 'public/images/avatars/user/default-avatar.png',
                    gender: 0,
                    birthday: '2001/01/01',
                    address: 'Da Nang, Viet Nam',
                    phone_number: '0905676905',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserInfos', null, {})
    },
}
