const models = require(process.cwd() + '/models/index')

const include = [
    {
        model: models.User,
        attributes: { exclude: ['password', 'updatedAt'] },
        required: true,
    },
    {
        model: models.Like,
    },
    {
        model: models.Comment,
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
    return models.Outfit.findAll({
        include: include,
        where: { user_id: userId },
        order: [['id', 'ASC']],
    })
}

async function showById(outfitId) {
    return models.Outfit.findOne({ include: include, where: { id: outfitId } })
}

async function create(newOutfit) {
    return models.Outfit.create(newOutfit)
}

async function update(updateOutfit, outfitId) {
    return models.Outfit.update(updateOutfit, { where: { id: outfitId } })
}

async function destroy(outfitId) {
    return models.Outfit.destroy({ where: { id: outfitId } })
}

async function checkIsOutfitOwner(itemId, userId) {
    return !!(await models.Outfit.findOne({
        where: {
            id: itemId,
            user_id: userId,
        },
    }))
}

module.exports = {
    getListOutfitsByUserId: indexByUserId,
    getOutfitById: showById,
    addNewOutfit: create,
    updateOutfitById: update,
    deleteOutfitById: destroy,
    checkIsOutfitOwner: checkIsOutfitOwner,
}
