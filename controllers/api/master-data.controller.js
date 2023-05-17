const { getAllOccasions, getAllCategories } = require('../CRUD/master-data')

async function index(request, response) {
    try {
        // Get all occasions
        const dbOccasions = await getAllOccasions()

        // Get all categories
        const dbCategories = await getAllCategories()

        return response.status(200).json({
            Occasions: dbOccasions,
            Categories: dbCategories,
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
