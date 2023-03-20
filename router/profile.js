const { Router } = require('express');
const profController = require('../controller/profile');
const router = new Router();

router.get('/profile', profController.index)
router.post('/profile', profController.setting)

module.exports = router;