const path = require('path')

const uploadFile = (archivo, carpeta, uid = '700', ext) => {
    return new Promise((res, rej) => {
        const fileName = uid + '.' + ext
        const uploadPath = path.join(__dirname, '../uploads', carpeta, fileName)

        archivo.mv(uploadPath, (err) => {
            if (err) rej(err)
            res(fileName)
        })
    })
}

module.exports = uploadFile