const path = require('path')

const userPhotoPath = async (fileName) => {
    return path.join(__dirname, '../uploads', '/users', fileName)
}

module.exports = { userPhotoPath }