const { Router } = require('express');

const servicesController = require('../controller/services');

const router = new Router();

// @desc services page
// @desc /services GET
router.get('/services', servicesController.index)

module.exports = router;