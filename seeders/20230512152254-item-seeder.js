'use strict'

const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
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

        const minDbChildCategoryId = 9
        const maxDbChildCategoryId = 61

        // Database categories
        const dbCategories = {
            1: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            2: [22, 23, 24, 25],
            3: [26, 27, 28, 29],
            4: [30, 31],
            5: [32, 33, 34, 35, 36, 37, 38, 39],
            6: [40, 41, 42, 43, 44, 45, 46, 47, 48],
            7: [49, 50, 51, 52, 53, 54, 55, 56, 57],
            8: [58, 59, 60, 61],
        }

        // Some identified categories
        const identified = [
            {
                parent_id: 1,
                json_category_id: [
                    11, 15, 17, 18, 19, 21, 101, 104, 106, 243, 244, 245, 246,
                    247, 249, 250, 251, 252, 257, 4419,
                ],
            },
            {
                parent_id: 2,
                json_category_id: [
                    3, 4, 5, 6, 243, 244, 245, 246, 247, 249, 250, 251,
                ],
            },
            {
                parent_id: 3,
                json_category_id: [27, 28, 239, 240, 241],
            },
            {
                parent_id: 4,
                json_category_id: [7, 8, 9, 10, 106, 244, 245, 246, 247],
            },
            {
                parent_id: 5,
                json_category_id: [
                    23, 24, 25, 26, 27, 28, 29, 30, 243, 257, 4436,
                ],
            },
            {
                parent_id: 6,
                json_category_id: [
                    41, 42, 43, 46, 47, 48, 49, 50, 291, 292, 293, 294, 295,
                    296, 297, 298,
                ],
            },
            {
                parent_id: 7,
                json_category_id: [35, 36, 37, 38, 39, 260, 258, 259, 290, 319],
            },
            {
                parent_id: 8,
                json_category_id: [55, 57, 303],
            },
        ]

        let jsonItems = []

        try {
            const jsonFile = await fs.promises.readFile('data/test_no_dup.json', 'utf8')
            const outfitData = JSON.parse(jsonFile)

            let imageIndex = 0

            // Access the parsed JSON data
            for (let outfit of outfitData) {
                for (let item of outfit.items) {
                    let categoryId = null

                    // Find parent category id if json category id identified
                    identified.forEach((object) => {
                        if (
                            object.json_category_id.includes(
                                item.categoryid,
                            )
                        ) {
                            const dbChildCategories =
                                dbCategories[object.parent_id]
                            const randomChildCategoryId =
                                dbChildCategories[
                                    Math.floor(
                                        Math.random() *
                                            dbChildCategories.lenght,
                                    )
                                ]
                            categoryId = randomChildCategoryId
                        }
                    })

                    // If not identified, random a child category id
                    if (!categoryId) {
                        const randomChildCategoryId =
                            Math.floor(
                                Math.random() *
                                    (maxDbChildCategoryId -
                                        minDbChildCategoryId +
                                        1),
                            ) + minDbChildCategoryId
                        categoryId = randomChildCategoryId
                    }

                    jsonItems.push({
                        user_id: 0,
                        image: `public/images/items/app_item_${imageIndex}.png`,
                        category_id: categoryId,
                        brand: item.name,
                    })

                    imageIndex += 1
                }
            }
        } catch (error) {
            console.error('Cannot read JSON file:', error)
        }

        // Import all json items's category
        if (jsonItems.length > 0)
            await queryInterface.bulkInsert('Items', jsonItems, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Items', null, {})
    },
}
