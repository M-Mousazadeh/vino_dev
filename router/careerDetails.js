const { Router } = require('express');

const router = new Router()

router.get('/careerDetails', (req, res) => {
    res.render('career-details', {
        pageTitle: `${req.query.id} | وینو تیم`,
        path: '/careerDetails',
        text: req.query.id,
        session: req.session.user
    })
})

module.exports = router;