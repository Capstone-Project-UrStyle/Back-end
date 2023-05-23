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

async function indexColors() {
    return models.Color.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

async function indexMaterials() {
    return models.Material.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

async function indexPatterns() {
    return models.Pattern.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

module.exports = {
    getAllOccasions: indexOccasions,
    getAllCategories: indexCategories,
    getAllColors: indexColors,
    getAllMaterials: indexMaterials,
    getAllPatterns: indexPatterns,
}
