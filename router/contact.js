const { Router } = require('express');

const contactsController = require('../controller/contacts');

const router = new Router();

// @desc contact page
// @desc /contact GET
router.get('/contact', contactsController.index)
router.post('/contact', contactsController.index)

module.exports = router;