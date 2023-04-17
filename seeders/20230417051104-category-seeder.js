'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Categories',
            [
                // Parent categories
                {
                    name: 'Tops',
                    image: 'public/images/icons/categories/Tops.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Dresses',
                    image: 'public/images/icons/categories/Dresses.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Pants',
                    image: 'public/images/icons/categories/Pants.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Skirts',
                    image: 'public/images/icons/categories/Skirts.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Outerwear',
                    image: 'public/images/icons/categories/Outerwear.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Shoes',
                    image: 'public/images/icons/categories/Shoes.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Bags',
                    image: 'public/images/icons/categories/Bags.png',
                    is_parent: true,
                    parent_id: null,
                },
                {
                    name: 'Headwear',
                    image: 'public/images/icons/categories/Headwear.png',
                    is_parent: true,
                    parent_id: null,
                },

                // Child categories
                // Tops
                {
                    name: 'T-shirts',
                    image: 'public/images/icons/categories/T-shirts.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Long Sleeve T-shirts',
                    image: 'public/images/icons/categories/Long Sleeve T-shirts.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Sleeveless T-shirts',
                    image: 'public/images/icons/categories/Sleeveless T-shirts.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Polo Shirts',
                    image: 'public/images/icons/categories/Polo Shirts.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Tanks & Camis',
                    image: 'public/images/icons/categories/Tanks & Camis.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Crop Tops',
                    image: 'public/images/icons/categories/Crop Tops.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Blouses',
                    image: 'public/images/icons/categories/Blouses.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Sweatshirts',
                    image: 'public/images/icons/categories/Sweatshirts.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Hoodies',
                    image: 'public/images/icons/categories/Hoodies.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Sweaters',
                    image: 'public/images/icons/categories/Sweaters.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Sweater Vests',
                    image: 'public/images/icons/categories/Sweater Vests.png',
                    is_parent: false,
                    parent_id: 1,
                },

                {
                    name: 'Cadigan',
                    image: 'public/images/icons/categories/Cadigan.png',
                    is_parent: false,
                    parent_id: 1,
                },
                {
                    name: 'Bodysuits',
                    image: 'public/images/icons/categories/Bodysuits.png',
                    is_parent: false,
                    parent_id: 1,
                },

                // Dresses
                {
                    name: 'Day Dresses',
                    image: 'public/images/icons/categories/Day Dresses.png',
                    is_parent: false,
                    parent_id: 2,
                },
                {
                    name: 'Mini Dresses',
                    image: 'public/images/icons/categories/Mini Dresses.png',
                    is_parent: false,
                    parent_id: 2,
                },
                {
                    name: 'Jacket Dresses',
                    image: 'public/images/icons/categories/Jacket Dresses.png',
                    is_parent: false,
                    parent_id: 2,
                },
                {
                    name: 'Party Dresses',
                    image: 'public/images/icons/categories/Party Dresses.png',
                    is_parent: false,
                    parent_id: 2,
                },

                // Pants
                {
                    name: 'Shorts',
                    image: 'public/images/icons/categories/Shorts.png',
                    is_parent: false,
                    parent_id: 3,
                },
                {
                    name: 'Jeans',
                    image: 'public/images/icons/categories/Jeans.png',
                    is_parent: false,
                    parent_id: 3,
                },
                {
                    name: 'Trousers',
                    image: 'public/images/icons/categories/Trousers.png',
                    is_parent: false,
                    parent_id: 3,
                },
                {
                    name: 'Track Pants',
                    image: 'public/images/icons/categories/Track Pants.png',
                    is_parent: false,
                    parent_id: 3,
                },

                // Skirts
                {
                    name: 'Mini Skirts',
                    image: 'public/images/icons/categories/Mini Skirts.png',
                    is_parent: false,
                    parent_id: 4,
                },
                {
                    name: 'Long Skirts',
                    image: 'public/images/icons/categories/Long Skirts.png',
                    is_parent: false,
                    parent_id: 4,
                },

                // Outerwear
                {
                    name: 'Coats',
                    image: 'public/images/icons/categories/Coats.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Trench Coats',
                    image: 'public/images/icons/categories/Trench Coats.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Fur Coats',
                    image: 'public/images/icons/categories/Fur Coats.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Shearling Coats',
                    image: 'public/images/icons/categories/Shearling Coats.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Blousons',
                    image: 'public/images/icons/categories/Blousons.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Jackets',
                    image: 'public/images/icons/categories/Jackets.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Cardigans',
                    image: 'public/images/icons/categories/Cardigans.png',
                    is_parent: false,
                    parent_id: 5,
                },
                {
                    name: 'Blazers',
                    image: 'public/images/icons/categories/Blazers.png',
                    is_parent: false,
                    parent_id: 5,
                },

                // Shoes
                {
                    name: 'Sneakers',
                    image: 'public/images/icons/categories/Sneakers.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Sport Shoes',
                    image: 'public/images/icons/categories/Sport Shoes.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Flat Shoes',
                    image: 'public/images/icons/categories/Flat Shoes.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'High Heels',
                    image: 'public/images/icons/categories/High Heels.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Sandals',
                    image: 'public/images/icons/categories/Sandals.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Sandal Heels',
                    image: 'public/images/icons/categories/Sandal Heels.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Slides',
                    image: 'public/images/icons/categories/Slides.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'High Boots',
                    image: 'public/images/icons/categories/High Boots.png',
                    is_parent: false,
                    parent_id: 6,
                },
                {
                    name: 'Combat Boots',
                    image: 'public/images/icons/categories/Combat Boots.png',
                    is_parent: false,
                    parent_id: 6,
                },

                // Bags
                {
                    name: 'Tote',
                    image: 'public/images/icons/categories/Tote.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Shoulder',
                    image: 'public/images/icons/categories/Shoulder.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Crossbody',
                    image: 'public/images/icons/categories/Crossbody.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Waist',
                    image: 'public/images/icons/categories/Waist.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Canvas',
                    image: 'public/images/icons/categories/Canvas.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Backpacks',
                    image: 'public/images/icons/categories/Backpacks.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Clutch',
                    image: 'public/images/icons/categories/Clutch.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Briefcases',
                    image: 'public/images/icons/categories/Briefcases.png',
                    is_parent: false,
                    parent_id: 7,
                },
                {
                    name: 'Suitcases',
                    image: 'public/images/icons/categories/Suitcases.png',
                    is_parent: false,
                    parent_id: 7,
                },

                // Headwear
                {
                    name: 'Cap',
                    image: 'public/images/icons/categories/Cap.png',
                    is_parent: false,
                    parent_id: 8,
                },
                {
                    name: 'Hats',
                    image: 'public/images/icons/categories/Hats.png',
                    is_parent: false,
                    parent_id: 8,
                },
                {
                    name: 'Sun Hats',
                    image: 'public/images/icons/categories/Sun Hats.png',
                    is_parent: false,
                    parent_id: 8,
                },
                {
                    name: 'Fedoras',
                    image: 'public/images/icons/categories/Fedoras.png',
                    is_parent: false,
                    parent_id: 8,
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {})
    },
}
