const validators = require(process.cwd() + '/helpers/validators')

const {
    getListClosetsByUserId,
    getClosetById,
    addNewCloset,
    updateClosetById,
    deleteClosetById,
    checkNameExisted,
} = require('../CRUD/closet')

async function indexByUserId(request, response) {
    try {
        const userId = request.params.userId

        // Get all closets that user own
        const dbClosets = await getListClosetsByUserId(userId)

        return response.status(200).json(dbClosets)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function showById(request, response) {
    try {
        const closetId = request.params.id

        // Check if closet exists
        const dbCloset = await getClosetById(closetId)
        if (dbCloset) {
            return response.status(200).json(dbCloset)
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

async function create(request, response) {
    try {
        // Check if name is existed
        const dbCloset = await checkNameExisted(request.body.name)
        if (dbCloset) {
            return response.status(409).json({
                message: 'Closet name already exists!',
            })
        }

        // Create new closet
        const newCloset = {
            user_id: request.userData.userId,
            name: request.body.name,
            is_public: request.body.is_public,
        }

        // Validate new user's data
        const validateResponse = validators.validateCloset(newCloset)
        if (validateResponse !== true) {
            return response.status(400).json({
                message: 'Validation failed!',
                errors: validateResponse,
            })
        }

        // Add new user to database
        addNewCloset(newCloset).then(async (result) => {
            // Create occasion associations
            const occasionIds = request.body.occasion_ids
            if (
                occasionIds &&
                Array.isArray(occasionIds) &&
                occasionIds.length > 0
            ) {
                await result.setOccasions(occasionIds)
            }

            return response.status(200).json({
                message: 'Create closet successfully!',
            })
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function updateById(request, response) {
    try {
        const closetId = request.params.id

        // Check if closet exists
        const dbCloset = await getClosetById(closetId)
        if (dbCloset) {
            // Update closet's data
            const updateCloset = {
                name: request.body.name,
                is_public: request.body.is_public,
            }

            // Validate new closet's data
            const validateResponse = validators.validateCloset(updateCloset)
            if (validateResponse !== true) {
                return response.status(400).json({
                    message: 'Validation failed!',
                    errors: validateResponse,
                })
            }

            updateClosetById(updateCloset, dbCloset.id)

            // Update occasion associations
            const occasionIds = request.body.occasion_ids
            if (
                occasionIds &&
                Array.isArray(occasionIds) &&
                occasionIds.length > 0
            ) {
                await dbCloset.setOccasions(occasionIds)
            }

            return response.status(200).json({
                message: 'Update closet successfully!',
            })
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

async function deleteById(request, response) {
    try {
        const closetId = request.params.id

        // Check if closet exists
        const dbCloset = await getClosetById(closetId)
        if (dbCloset) {
            // Delete closet
            await deleteClosetById(dbCloset.id)

            return response.status(200).json({
                message: 'Delete closet successfully!',
            })
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
    indexByUserId: indexByUserId,
    showById: showById,
    create: create,
    updateById: updateById,
    deleteById: deleteById,
}
