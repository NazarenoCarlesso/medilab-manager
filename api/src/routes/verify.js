const { Router } = require('express')

// middlewares
const { header, param } = require('express-validator')
const validateReq = require('../middlewares/validateReq');
const { validateUserId } = require('../middlewares/validateDB');

// handlers
const { verifyHandler } = require('../handlers/verify')


// routes
const router = Router()

router.get('/:id', [
    param('id', 'Id debe ser un uuid').isUUID(),
    param('id').custom(validateUserId),
    validateReq
], verifyHandler)

module.exports = router


