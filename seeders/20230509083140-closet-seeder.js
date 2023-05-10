'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Closets',
            [
                {
                    user_id: 1,
                    name: 'All items',
                    is_public: false,
                },
                {
                    user_id: 2,
                    name: 'All items',
                    is_public: false,
                },
                {
                    user_id: 3,
                    name: 'All items',
                    is_public: false,
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Closets', null, {})
    },
}
