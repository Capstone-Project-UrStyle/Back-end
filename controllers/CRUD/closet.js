const models = require(process.cwd() + '/models/index')

const include = [
    {
        model: models.User,
        attributes: { exclude: ['password', 'updatedAt'] },
        required: true,
    },
    {
        model: models.Occasion,
        separate: false,
    },
    {
        model: models.Item,
        separate: false,
        order: [['id', 'ASC']],
        limit: 4,
        include: {
            model: models.Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
    },
]

async function indexByUserId(userId) {
    return models.Closet.findAll({
        include: include,
        where: { user_id: userId },
        order: [['id', 'ASC']],
    })
}

async function showById(closetId) {
    return models.Closet.findOne({
        include: include,
        where: { id: closetId },
    })
}

async function create(newCloset) {
    return models.Closet.create(newCloset)
}

async function update(updateCloset, closetId) {
    return models.Closet.update(updateCloset, { where: { id: closetId } })
}

async function destroy(outfitId) {
    return models.Closet.destroy({ where: { id: outfitId } })
}

async function checkNameExisted(name) {
    return !!(await models.Closet.findOne({
        where: {
            name: name,
        },
    }))
}

async function checkIsClosetOwner(closetId, userId) {
    return !!(await models.Closet.findOne({
        where: {
            id: closetId,
            user_id: userId,
        },
    }))
}

module.exports = {
    getListClosetsByUserId: indexByUserId,
    getClosetById: showById,
    addNewCloset: create,
    updateClosetById: update,
    deleteClosetById: destroy,
    checkNameExisted: checkNameExisted,
    checkIsClosetOwner: checkIsClosetOwner,
}
