const { Router } = require('express')

const {getDoctorsHandler,
} = require('../handlers/doctor')


const router = Router()

router.get('/', getDoctorsHandler)


module.exports = router