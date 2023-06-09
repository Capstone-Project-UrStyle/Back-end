'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('OutfitOccasions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            outfit_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Outfits',
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
        await queryInterface.dropTable('OutfitOccasions')
    },
}
