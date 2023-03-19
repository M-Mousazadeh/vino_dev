const { Router } = require('express');

const router = new Router();
const blogDetail = require('../controller/blogDetails');

router.get('/blogDetails', blogDetail.index)

module.exports = router;