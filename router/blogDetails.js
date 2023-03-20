const { Router } = require('express');

const router = new Router();
const blogDetail = require('../controller/blogDetails');

router.get('/blogDetails', blogDetail.index)
router.post('/blogDetails', blogDetail.save)

module.exports = router;