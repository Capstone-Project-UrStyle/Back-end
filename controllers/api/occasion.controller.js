const {
    getAllOccasions,
} = require('../CRUD/occasion')

async function index(request, response) {
    try {
        // Get all occasions
        const dbOccasions = await getAllOccasions()

        return response.status(200).json(dbOccasions)
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