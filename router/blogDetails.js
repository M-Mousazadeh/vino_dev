const {Router} = require('express');

const router = new Router();
const blogDetail = require('../controller/blogDetails');
// @desc blog page
// @desc /blogDetails GET
router.get('/blogDetails',blogDetail.index)


module.exports = router;