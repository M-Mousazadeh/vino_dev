const {Router} = require('express');

const aboutController = require('../controller/about');

const router = new Router();

// @desc about page
// @desc /about GET
router.get('/about', aboutController.index )

module.exports = router;