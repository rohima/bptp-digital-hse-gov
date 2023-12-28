const express = require('express')
const router = express.Router()


router.use('/latest', require('./latest/routes'));


module.exports = router
