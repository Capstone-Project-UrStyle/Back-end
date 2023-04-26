'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'UserInfos',
            [
                {
                    user_id: 1,
                    avatar: 'public/images/avatars/default-avatar.png',
                    gender: 0,
                    birthday: '2001/01/01',
                    address: 'Da Nang, Viet Nam',
                    phone_number: '0905676905',
                    facebook: 'https://www.facebook.com/KietBunzz',
                    instagram: 'https://www.instagram.com/_bunzz_0904/',
                },
                {
                    user_id: 2,
                    avatar: 'public/images/avatars/default-avatar.png',
                    gender: 1,
                    birthday: '2001/01/01',
                    address: 'Ha Noi, Viet Nam',
                    phone_number: '0905676905',
                    facebook: 'https://www.facebook.com/KietBunzz',
                    instagram: 'https://www.instagram.com/_bunzz_0904/',
                },
                {
                    user_id: 3,
                    avatar: 'public/images/avatars/default-avatar.png',
                    gender: 2,
                    birthday: '2001/01/01',
                    address: 'Ho Chi Minh, Viet Nam',
                    phone_number: '0905676905',
                    facebook: 'https://www.facebook.com/KietBunzz',
                    instagram: 'https://www.instagram.com/_bunzz_0904/',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserInfos', null, {})
    },
}
