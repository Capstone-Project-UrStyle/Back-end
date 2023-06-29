'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UserInfos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                allowNull: false,
                unique: true,
                type: Sequelize.INTEGER,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            gender: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.SMALLINT,
            },
            birthday: {
                type: Sequelize.DATE,
            },
            address: {
                type: Sequelize.STRING,
            },
            phone_number: {
                type: Sequelize.STRING,
            },
            facebook: {
                type: Sequelize.STRING,
            },
            instagram: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('UserInfos')
    },
}
