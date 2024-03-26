const express = require('express')
const router = express.Router()


router.use('/latest', require('./latest/routes'));
router.use('/version-7', require('./version-7/routes'));
router.use('/version-6', require('./version-6/routes'));
router.use('/version-5', require('./version-5/routes'));
router.use('/version-4', require('./version-4/routes'));
router.use('/version-3', require('./version-3/routes'));
router.use('/version-2', require('./version-2/routes'));
router.use('/version-1', require('./version-1/routes'));


module.exports = router
