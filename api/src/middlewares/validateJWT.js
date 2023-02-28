const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
    const token = req.header('token')

    // Si no hay token
    if (!token) {
        return res.status(400).json({ msg: 'No hay token en la peticion' })
    }

    // Verificar la firma del token
    try {
        jwt.verify(token, process.env.SECRET_JWT_KEY)

        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: 'Token no válido'})
    }
}

module.exports = validateJWT