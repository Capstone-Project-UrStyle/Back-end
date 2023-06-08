const multer = require('multer')
const path = require('path')
const fs = require('fs')

const destination = process.cwd() + '/public/images/avatars'

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true })
}

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, destination)
    },
    filename: function (request, file, cb) {
        // Change the file extension to '.png' if it was '.jpeg' or '.jpg'
        const fileExt = path.extname(file.originalname)
        if (fileExt === '.jpeg' || fileExt === '.jpg') {
            file.originalname = file.originalname.replace(fileExt, '.png')
        }

        cb(null, request.params.id + path.extname(file.originalname))
    },
})

const fileFilter = (request, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        file.mimetype = 'image/png'
    }

    if (file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Unsupported file type'), false)
    }
}

const uploader = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
}).single('user-avatar')

module.exports = uploader
