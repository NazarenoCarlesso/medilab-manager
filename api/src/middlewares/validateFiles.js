const validateFile = (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).send('No hay archivos que subir')
    }

    next()
}

const validateImg = (req, res, next) => {
    const { archivo } = req.files
    const [, extension] = archivo.name.split('.')

    if (!['png', 'jpg', 'PNG', 'JPG'].includes(extension)) return res.status(400).json({ msg: 'Extension no es válida' })

    req.ext = extension
    next()
}

module.exports = { validateFile, validateImg }