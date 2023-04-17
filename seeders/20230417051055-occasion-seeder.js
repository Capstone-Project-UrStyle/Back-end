'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Occasions',
            [
                {
                    name: 'Spring',
                },
                {
                    name: 'Summer',
                },
                {
                    name: 'Autumn',
                },
                {
                    name: 'Winter',
                },
                {
                    name: 'Daily',
                },
                {
                    name: 'Work',
                },
                {
                    name: 'Date',
                },
                {
                    name: 'Formal',
                },
                {
                    name: 'Travel',
                },
                {
                    name: 'Home',
                },
                {
                    name: 'Party',
                },
                {
                    name: 'Sport',
                },
                {
                    name: 'Special',
                },
                {
                    name: 'School',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Occasions', null, {})
    },
}
