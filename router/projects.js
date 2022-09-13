const {Router} = require('express');

const projectsController = require('../controller/projects');

const router = new Router();

router.get('/projects', projectsController.index)

module.exports = router;