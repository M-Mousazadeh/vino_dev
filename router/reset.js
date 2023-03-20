const { Router } = require('express');

const resetController = require('../controller/reset');

const router = new Router();

router.get('/reset', resetController.index)

router.post('/reset', resetController.reset)

module.exports = router;