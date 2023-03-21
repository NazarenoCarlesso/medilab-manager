const { Router } = require('express')

// handlers
const {
    openaiAllHandler
} = require('../handlers/openai')

// routes
const router = Router()


router.post('/', openaiAllHandler)


module.exports = router