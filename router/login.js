const { Router } = require('express');

const loginController = require('../controller/login');

const router = new Router();

router.get('/login', loginController.login)

router.post('/login', loginController.checkUser)

router.get('/register', loginController.register)

router.post('/register', loginController.createUser)

router.get('/forgot', loginController.forgot)

router.post('/forgot', loginController.sendLink)
router.get('/logout', loginController.logout)

module.exports = router;