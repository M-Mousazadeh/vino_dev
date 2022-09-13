const {Router} = require('express');

const loginController = require('../controller/login');

const router = new Router();

// @desc login page
// @route GET /login
router.get('/login', loginController.login)


// @desc Register page
// @route GET /account/register
router.get('/register', loginController.register)

// @desc Register data handling
// @route POST /account/register
router.post('/register', loginController.createUser)

// @desc Forgot page Rendering
// @route GET /account/forgot
router.get('/forgot', loginController.forgot)

// @desc Forgot data handling
// @route POST /account/forgot
router.post('/forgot', loginController.sendLink)

module.exports = router;