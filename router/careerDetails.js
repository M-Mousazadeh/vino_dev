const { Router } = require('express');
const { model } = require('../model/Careers');

const router = new Router()

router.get('/careerDetails', async(req, res) => {

    let { _id } = req.query
    let careers = await model.findOne({ _id });

    await res.render('career-details', {
        pageTitle: 'وینو تیم | نمونه کار ',
        path: '/careerDetails',
        text: req.query.title,
        session: req.session.user,
        data: {
            id: req.query._id,
            title: req.query.title,
            titleimage: req.query.titleimage,
            header: req.query.header,
            imagebody: req.query.imagebody,
            description_1: req.query.description_1,
            description_2: req.query.description_2,
            userOpinions: careers.userOpinions
        }
    })
})

module.exports = router;