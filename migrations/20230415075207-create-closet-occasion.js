'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ClosetOccasions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            closet_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Closets',
                    key: 'id',
                    onDelete: 'CASCADE',
                },
            },
            occasion_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Occasions',
                    key: 'id',
                    onDelete: 'CASCADE',
                },
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
        await queryInterface.dropTable('ClosetOccasions')
    },
}
