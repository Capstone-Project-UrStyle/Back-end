const validators = require(process.cwd() + '/helpers/validators')

const {
    getListOutfitsByUserId,
    getOutfitById,
    addNewOutfit,
    updateOutfitById,
    deleteOutfitById,
} = require('../CRUD/outfit')

async function indexByUserId(request, response) {
    try {
        const userId = request.params.userId

        // Get all outfits that user own
        const dbOutfits = await getListOutfitsByUserId(userId)

        return response.status(200).json(dbOutfits)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function showById(request, response) {
    try {
        const outfitId = request.params.id

        // Check if outfit exists
        const dbOutfit = await getOutfitById(outfitId)
        if (dbOutfit) {
            return response.status(200).json(dbOutfit)
        } else {
            return response.status(404).json({
                message: 'Outfit not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function create(request, response) {
    try {
        // Create new outfit
        const newOutfit = {
            user_id: request.userData.userId,
            description: request.body.description,
            is_public: request.body.is_public,
        }

        // Validate new user's data
        const validateResponse = validators.validateOutfit(newOutfit)
        if (validateResponse !== true) {
            return response.status(400).json({
                message: 'Validation failed!',
                errors: validateResponse,
            })
        }

        // Add new user to database
        addNewOutfit(newOutfit).then(async (result) => {
            // Create occasion associations
            const occasionIds = request.body.occasion_ids
            if (
                occasionIds &&
                Array.isArray(occasionIds) &&
                occasionIds.length > 0
            ) {
                await result.setOccasions(occasionIds)
            }

            // Create item associations
            const itemIds = request.body.item_ids
            if (itemIds && Array.isArray(itemIds) && itemIds.length > 0) {
                await result.setItems(itemIds)
            }

            return response.status(200).json({
                message: 'Create outfit successfully!',
                outfitId: result.id,
            })
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function updateById(request, response) {
    try {
        const outfitId = request.params.id

        // Check if outfit exists
        const dbOutfit = await getOutfitById(outfitId)
        if (dbOutfit) {
            // Update outfit's data
            const updateOutfit = {
                description: request.body.name,
                is_public: request.body.is_public,
            }

            // Validate new outfit's data
            const validateResponse = validators.validateOutfit(updateOutfit)
            if (validateResponse !== true) {
                return response.status(400).json({
                    message: 'Validation failed!',
                    errors: validateResponse,
                })
            }

            await updateOutfitById(updateOutfit, dbOutfit.id)

            // Update occasion associations
            const occasionIds = request.body.occasion_ids
            if (
                occasionIds &&
                Array.isArray(occasionIds) &&
                occasionIds.length > 0
            ) {
                await dbCloset.setOccasions(occasionIds)
            }

            // Update item associations
            const itemIds = request.body.item_ids
            if (itemIds && Array.isArray(itemIds) && itemIds.length > 0) {
                await dbOutfit.setItems(itemIds)
            }

            return response.status(200).json({
                message: 'Update outfit successfully!',
            })
        } else {
            return response.status(404).json({
                message: 'Outfit not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function deleteById(request, response) {
    try {
        const oufitId = request.params.id

        // Check if outfit exists
        const dbOutfit = await getOutfitById(oufitId)
        if (dbOutfit) {
            // Delete all oufit's associations
            await dbOutfit.setOccasions([])
            await dbOutfit.setItems([])

            // Delete outfit
            await deleteOutfitById(dbOutfit.id)

            return response.status(200).json({
                message: 'Delete outfit successfully!',
            })
        } else {
            return response.status(404).json({
                message: 'Outfit not found!',
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
    indexByUserId: indexByUserId,
    showById: showById,
    create: create,
    updateById: updateById,
    deleteById: deleteById,
}
