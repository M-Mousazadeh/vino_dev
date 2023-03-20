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
router.post('/careerDetails', async(req, res) => {
    let { _id } = req.query
        //let infoService = await model.findOne({ _id });
    let form = req.body
    let today = new Date().toLocaleDateString('fa-IR');
    form["time"] = today

    let save = await model.updateOne({ _id: _id }, { $push: { userOpinions: form } })
    console.log(save)
    if (save) {
        res.redirect("/careerDetails/?_id=" + _id)
    }
})
module.exports = router;