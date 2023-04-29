const models = require(process.cwd() + '/models/index')

async function index() {
    return models.Outfit.findAndCountAll()
}

async function showById(outfitId) {
    return models.Outfit.findOne({ where: { id: outfitId } })
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

module.exports = {
    index: index,
    getOutfitById: showById,
    addNewOutfit: create,
    updateOutfitById: update,
    deleteOutfitById: destroy,
}
