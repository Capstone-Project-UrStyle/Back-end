const models = require(process.cwd() + '/models/index')

async function index() {
    return models.Occasion.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

async function create(newOccassion) {
    return models.Occasion.create(newOccassion)
}

async function update(updateOccassion, occasionId) {
    return models.Occasion.update(updateOccassion, { where: { id: occasionId } })
}

async function destroy(occasionId) {
    return models.Occasion.destroy({ where: { id: occasionId } })
}

async function checkNameExisted(name) {
    return !!(await models.Occasion.findOne({
        where: {
            name: name,
        },
    }))
}

module.exports = {
    getAllOccasions: index,
    addNewOccasion: create,
    updateOccasionById: update,
    deleteOccasionById: destroy,
    checkNameExisted: checkNameExisted,
}
