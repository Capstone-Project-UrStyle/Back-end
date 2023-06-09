const axios = require('axios')

const { getUserById } = require('../CRUD/user')
const { getClosetById } = require('../CRUD/closet')
const { getListItemsById, getListItemsByImageUrl } = require('../CRUD/item')
const { getAllCategories } = require('../CRUD/master-data')

async function getItemRecommendations(request, response) {
    try {
        const queryItemIds = request.body.query_item_ids
        const queryKeywords = request.body.query_keywords

        const requestUserId = request.userData.userId

        const dbUser = await getUserById(requestUserId)

        // Get all query items's data
        const dbQueryItems = await getListItemsById(queryItemIds)

        if (dbQueryItems && dbQueryItems.length > 0) {
            // Get parent categories that needed to query
            const dbCategories = await getAllCategories()
            const dbParentCategories = dbCategories.filter(
                (category) => category.is_parent,
            )
            const queryItemParentCategoryIds = [
                ...new Set(dbQueryItems.map((item) => item.Category.parent_id)),
            ]
            const queryParentCategories = dbParentCategories.filter(
                (category) => {
                    return !queryItemParentCategoryIds.includes(category.id)
                },
            )

            let queryKeywordsArray = []

            // Built query keyword string = user gender + weather + query keywords + parent category name
            for (const category of queryParentCategories) {
                let queryKeyword = ''

                if (dbUser.UserInfo.gender !== 2)
                    queryKeyword +=
                        dbUser.UserInfo.gender === 0 ? 'man' : 'women'

                if (
                    queryKeyword === 'man' &&
                    (category.name === 'Dresses' || category.name === 'Skirts')
                ) {
                    continue
                }

                queryKeyword +=
                    ' ' + (category.name === 'Headwear' ? 'Hat' : category.name)
                queryKeyword += ' ' + queryKeywords.join(' ')
                queryKeyword = queryKeyword.toLowerCase()

                queryKeywordsArray.push(queryKeyword)
            }

            // Call flask server API to get recommended outfits
            const recommendationResults = await axios.post(
                `${process.env.AI_SERVER_URL}/generate-item-recommendations`,
                {
                    query_item_image_paths:
                        dbQueryItems.map((item) => item.image) || [],
                    query_keywords: queryKeywordsArray || [],
                },
            )
            if (recommendationResults.status === 200) {
                // Return recommend outfits
                const recommendItems = await getListItemsByImageUrl(
                    recommendationResults.data,
                )

                return response.status(200).json(recommendItems)
            }
        } else {
            return response.status(404).json({
                message: 'Item not found!',
            })
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function getOutfitRecommendations(request, response) {
    try {
        const closetId = request.body.closet_id
        const limit = request.body.limit

        // Get closet data include all closet's items
        const dbCloset = await getClosetById(closetId)

        if (dbCloset) {
            const closetItems = dbCloset.Items

            // Call flask server API to get all possible outfits compatibility
            const outfitCompatibilityResults = await axios.post(
                `${process.env.AI_SERVER_URL}/generate-outfit-recommendations`,
                {
                    items: closetItems || [],
                    limit: limit || 5, // Default limit is 5
                },
            )

            if (outfitCompatibilityResults.status === 200) {
                // Return recommend outfits with descending scores
                return response
                    .status(200)
                    .json(outfitCompatibilityResults.data)
            }
        } else {
            return response.status(404).json({
                message: 'Closet not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    getItemRecommendations: getItemRecommendations,
    getOutfitRecommendations: getOutfitRecommendations,
}
