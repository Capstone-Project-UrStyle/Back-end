'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Colors',
            [
                {
                    name: 'White',
                    hex: '#ffffff',
                },
                {
                    name: 'Cream',
                    hex: '#fffced',
                },
                {
                    name: 'Beige',
                    hex: '#e2c79c',
                },
                {
                    name: 'Light-Gray',
                    hex: '#e7e7e7',
                },
                {
                    name: 'Dark-Gray',
                    hex: '#7a7a7a',
                },
                {
                    name: 'Black',
                    hex: '#141414',
                },
                {
                    name: 'Light-Pink',
                    hex: '#fee0de',
                },
                {
                    name: 'Yellow',
                    hex: '#fee600',
                },
                {
                    name: 'Light-Green',
                    hex: '#c5db88',
                },
                {
                    name: 'Turquoise',
                    hex: '#6bf1d8',
                },
                {
                    name: 'Light-Blue',
                    hex: '#c9e2f9',
                },
                {
                    name: 'Light-Purple',
                    hex: '#d7bef5',
                },
                {
                    name: 'Pink',
                    hex: '#ff828f',
                },
                {
                    name: 'Coral',
                    hex: '#ff705f',
                },
                {
                    name: 'Orange',
                    hex: '#ff820e',
                },
                {
                    name: 'Green',
                    hex: '#1b9268',
                },
                {
                    name: 'Blue',
                    hex: '#1f4ce3',
                },
                {
                    name: 'Purple',
                    hex: '#9c53be',
                },
                {
                    name: 'Red',
                    hex: '#ed1111',
                },
                {
                    name: 'Camel',
                    hex: '#c98b42',
                },
                {
                    name: 'Brown',
                    hex: '#844f1d',
                },
                {
                    name: 'Khaki',
                    hex: '#666b17',
                },
                {
                    name: 'Navy',
                    hex: '#060350',
                },
                {
                    name: 'Wine',
                    hex: '#9e213f',
                },
                {
                    name: 'Gold',
                    hex: '#e6c345',
                },
                {
                    name: 'Silver',
                    hex: '#dee1ea',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Colors', null, {})
    },
}
