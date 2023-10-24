const express = require('express')
const router = express.Router()


router.use('/latest', require('./latest/routes'));
router.use('/version-2', require('./version-1/routes'));


module.exports = router
