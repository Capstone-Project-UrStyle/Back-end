'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Follows',
            [
                {
                    follower_id: 1,
                    following_id: 2,
                },
                {
                    follower_id: 1,
                    following_id: 3,
                },
                {
                    follower_id: 2,
                    following_id: 1,
                },
                {
                    follower_id: 3,
                    following_id: 2,
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Follows', null, {})
    },
}
