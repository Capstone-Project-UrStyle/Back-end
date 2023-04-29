const models = require(process.cwd() + '/models/index')

async function index() {
    return models.Item.findAndCountAll()
}

async function showById(itemId) {
    return models.Item.findOne({ where: { id: itemId } })
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

module.exports = {
    index: index,
    getItemById: showById,
    addNewItem: create,
    updateItemById: update,
    deleteItemById: destroy,
}
