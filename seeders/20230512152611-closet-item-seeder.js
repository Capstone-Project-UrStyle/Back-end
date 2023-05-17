'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'ClosetItems',
            [
                {
                    closet_id: 1,
                    item_id: 1,
                },
                {
                    closet_id: 1,
                    item_id: 2,
                },
                {
                    closet_id: 1,
                    item_id: 3,
                },
                {
                    closet_id: 1,
                    item_id: 4,
                },
                {
                    closet_id: 4,
                    item_id: 2,
                },
                {
                    closet_id: 4,
                    item_id: 3,
                },
                {
                    closet_id: 4,
                    item_id: 4,
                },
                {
                    closet_id: 5,
                    item_id: 1,
                },
                {
                    closet_id: 5,
                    item_id: 4,
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ClosetItems', null, {})
    },
}
