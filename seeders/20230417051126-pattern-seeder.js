'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Patterns',
            [
                {
                    name: 'Solid-color',
                    image: 'public/images/icons/patterns/Solid-color.png',
                },
                {
                    name: 'Checked',
                    image: 'public/images/icons/patterns/Checked.png',
                },
                {
                    name: 'Striped',
                    image: 'public/images/icons/patterns/Striped.png',
                },
                {
                    name: 'Graphic',
                    image: 'public/images/icons/patterns/Graphic.png',
                },
                {
                    name: 'Dotted',
                    image: 'public/images/icons/patterns/Dotted.png',
                },
                {
                    name: 'Animal',
                    image: 'public/images/icons/patterns/Animal.png',
                },
                {
                    name: 'Floral',
                    image: 'public/images/icons/patterns/Floral.png',
                },
                {
                    name: 'Argyle',
                    image: 'public/images/icons/patterns/Argyle.png',
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Patterns', null, {})
    },
}
