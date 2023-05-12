'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
          {
              user_id: 1,
              image: 'public/images/items/test-t-shirt.png',
              category_id: 9,
              brand: '',
          },
          {
              user_id: 1,
              image: 'public/images/items/test-short-pant.png',
              category_id: 26,
              brand: '',
          },
          {
              user_id: 1,
              image: 'public/images/items/test-jacket.png',
              category_id: 37,
              brand: '',
          },
          {
              user_id: 1,
              image: 'public/images/items/test-hat.png',
              category_id: 58,
              brand: '',
          },
      ],
      {},
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {})
  }
};
