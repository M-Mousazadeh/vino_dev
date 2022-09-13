const {Router} = require('express');

const blogController = require('../controller/blog');

const router = new Router()

// @desc blog page
// @desc /blog GET
router.get('/blog', blogController.index)

module.exports = router;