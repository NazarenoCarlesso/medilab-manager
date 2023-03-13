const { Router } = require('express')

// handlers
const {
    generateAllHandler,
    generate1,
    generate2,
    generate3,
    generate4
} = require('../handlers/generate')

// routes
const router = Router()

router.post('/1', generate1)

router.post('/2', generate2)

router.post('/3', generate3)

router.post('/4', generate4)

router.post('/', generateAllHandler)


module.exports = router