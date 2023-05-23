const models = require(process.cwd() + '/models/index')

const include = [
    {
        model: models.User,
        attributes: { exclude: ['password', 'updatedAt'] },
        required: true,
    },
    {
        model: models.Category,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        required: true,
    },
    {
        model: models.Occasion,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    {
        model: models.Closet,
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
            model: models.Item,
            separate: false,
            order: [['id', 'ASC']],
            limit: 4,
            include: {
                model: models.Category,
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
        },
    },
    {
        model: models.Color,
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    {
        model: models.Material,
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    {
        model: models.Pattern,
        order: [['id', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
]

async function showById(itemId) {
    return models.Item.findOne({
        include: include,
        where: { id: itemId },
    })
}

async function create(newItem) {
    return models.Item.create(newItem)
}

async function update(updateItem, itemId) {
    return models.Item.update(updateItem, { where: { id: itemId } })
}

async function destroy(itemId) {
    return models.Item.destroy({ where: { id: itemId } })
}

async function checkIsItemOwner(itemId, userId) {
    return !!(await models.Item.findOne({
        where: {
            id: itemId,
            user_id: userId,
        },
    }))
}

module.exports = {
    getItemById: showById,
    addNewItem: create,
    updateItemById: update,
    deleteItemById: destroy,
    checkIsItemOwner: checkIsItemOwner,
}
