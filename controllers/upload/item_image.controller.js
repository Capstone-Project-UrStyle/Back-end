const path = require('path')
const axios = require('axios')

const { getItemById, updateItemById } = require('../CRUD/item')

async function uploadSingle(request, response) {
    try {
        if (request.file) {
            const itemId = request.params.id

            // Check if user exists
            const dbItem = await getItemById(itemId)
            if (dbItem) {
                const extName = path.extname(request.file.originalname)
                const imageUrl = `public/images/items/${itemId}${extName}`
                const updateItem = {
                    image: imageUrl,
                }

                // Call flask server API to extract new image features
                axios.post(
                    `${process.env.AI_SERVER_URL}/extract-new-item-image-features`,
                    {
                        new_item_image_path: imageUrl,
                    },
                )

                // Update user avatar in database
                updateItemById(updateItem, dbItem.id).then(() => {
                    return response.status(200).json({
                        message: "Upload item's image successfully!",
                        url: imageUrl,
                    })
                })
            } else {
                return response.status(404).json({
                    message: 'Item not found!',
                })
            }
        } else {
            return response.status(400).json({
                message: 'Image file not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = uploadSingle
