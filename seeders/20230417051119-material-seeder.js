'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Materials',
            [
                {
                    name: 'Cotton',
                    image: 'public/images/icons/materials/Cotton.png',
                },
                {
                    name: 'Polyester',
                    image: 'public/images/icons/materials/Polyester.png',
                },
                {
                    name: 'Fur',
                    image: 'public/images/icons/materials/Fir.png',
                },
                {
                    name: 'Tweed',
                    image: 'public/images/icons/materials/Tweed.png',
                },
                {
                    name: 'Nylon',
                    image: 'public/images/icons/materials/Nylon.png',
                },
                {
                    name: 'Leather',
                    image: 'public/images/icons/materials/Leather.png',
                },
                {
                    name: 'Velvet',
                    image: 'public/images/icons/materials/Velvet.png',
                },
                {
                    name: 'Lace',
                    image: 'public/images/icons/materials/Lace.png',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Materials', null, {})
    },
}
