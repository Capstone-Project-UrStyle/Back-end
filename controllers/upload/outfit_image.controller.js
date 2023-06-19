const path = require('path')

const { getOutfitById, updateOutfitById } = require('../CRUD/outfit')

async function uploadSingle(request, response) {
    try {
        if (request.file) {
            const outfitId = request.params.id

            // Check if user exists
            const dbOutfit = await getOutfitById(outfitId)
            if (dbOutfit) {
                // Update outfit image in database
                const extName = path.extname(request.file.originalname)
                const imageUrl = `public/images/outfits/${outfitId}${extName}`
                const updateOutfit = {
                    image: imageUrl,
                }
                updateOutfitById(updateOutfit, dbOutfit.id).then(() => {
                    return response.status(200).json({
                        message: "Upload outfit's image successfully!",
                        url: imageUrl,
                    })
                })
            } else {
                return response.status(404).json({
                    message: 'Outfit not found!',
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
