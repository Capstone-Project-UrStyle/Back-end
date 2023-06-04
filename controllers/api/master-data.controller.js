const {
    getAllOccasions,
    getAllCategories,
    getAllColors,
    getAllMaterials,
    getAllPatterns,
} = require('../CRUD/master-data')

async function index(request, response) {
    try {
        // Get all occasions
        const dbOccasions = await getAllOccasions()

        // Get all categories
        const dbCategories = await getAllCategories()

        // Get all corlors
        const dbColors = await getAllColors()

        // Get all materials
        const dbMaterials = await getAllMaterials()

        // Get all patterns
        const dbPatterns = await getAllPatterns()

        return response.status(200).json({
            Occasions: dbOccasions,
            Categories: dbCategories,
            Colors: dbColors,
            Materials: dbMaterials,
            Patterns: dbPatterns,
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    index: index,
}
