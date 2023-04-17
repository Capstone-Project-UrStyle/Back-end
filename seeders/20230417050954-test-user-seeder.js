'use strict'

const hash_helper = require('../helpers/password-encrypter/hash_helper')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Tuan Kiet',
                    email: 'tuankietnk2001@gmail.com',
                    password: hash_helper.hash('bunzz0904'),
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {})
    },
}
