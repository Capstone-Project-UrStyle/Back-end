const models = require(process.cwd() + '/models/index')

async function indexOccasions() {
    return models.Occasion.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

async function indexCategories() {
    return models.Category.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

async function createOccasion(newOccassion) {
    return models.Occasion.create(newOccassion)
}

async function updateOccasion(updateOccassion, occasionId) {
    return models.Occasion.update(updateOccassion, {
        where: { id: occasionId },
    })
}

async function destroyOccasion(occasionId) {
    return models.Occasion.destroy({ where: { id: occasionId } })
}

async function checkOccasionNameExisted(name) {
    return !!(await models.Occasion.findOne({
        where: {
            name: name,
        },
    }))
}

module.exports = {
    getAllOccasions: indexOccasions,
    getAllCategories: indexCategories,
    addNewOccasion: createOccasion,
    updateOccasionById: updateOccasion,
    deleteOccasionById: destroyOccasion,
    checkNameExisted: checkOccasionNameExisted,
}
