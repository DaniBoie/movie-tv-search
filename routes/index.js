const router = require('express').Router()

router.use('/api', require('./mediaRoutes.js'))

module.exports = router