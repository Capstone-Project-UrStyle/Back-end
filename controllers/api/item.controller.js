const validators = require(process.cwd() + '/helpers/validators')

const { getItemById, updateItemById } = require('../CRUD/item')

async function showById(request, response) {
    try {
        const itemId = request.params.id

        // Check if closet exists
        const dbItem = await getItemById(itemId)
        if (dbItem) {
            return response.status(200).json(dbItem)
        } else {
            return response.status(404).json({
                message: 'Item not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function updateById(request, response) {
    try {
        const itemId = request.params.id

        // Check if item exists
        const dbItem = await getItemById(itemId)
        if (dbItem) {
            // Update item's data
            const updateItem = {
                category_id: request.body.category_id,
                brand: request.body.brand,
            }

            // Validate new item's data
            const validateResponse = validators.validateItem(updateItem)
            if (validateResponse !== true) {
                return response.status(400).json({
                    message: 'Validation failed!',
                    errors: validateResponse,
                })
            }

            updateItemById(updateItem, dbItem.id)

            // Update occasion associations
            const occasionIds = request.body.occasion_ids
            if (
                occasionIds &&
                Array.isArray(occasionIds) &&
                occasionIds.length > 0
            ) {
                await dbItem.setOccasions(occasionIds)
            }

            // Update color associations
            const colorIds = request.body.color_ids
            if (colorIds && Array.isArray(colorIds) && colorIds.length > 0) {
                await dbItem.setColors(colorIds)
            }

            // Update material associations
            const materialIds = request.body.material_ids
            if (
                materialIds &&
                Array.isArray(materialIds) &&
                materialIds.length > 0
            ) {
                await dbItem.setMaterials(materialIds)
            }

            // Update pattern associations
            const patternIds = request.body.pattern_ids
            if (
                patternIds &&
                Array.isArray(patternIds) &&
                patternIds.length > 0
            ) {
                await dbItem.setPatterns(patternIds)
            }

            return response.status(200).json({
                message: 'Update item successfully!',
            })
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

module.exports = {
    showById: showById,
    updateById: updateById,
}
