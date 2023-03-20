const { Router } = require('express');
const { modelService } = require('../model/Services');
const { model } = require('../model/Users');

const router = new Router()

router.get('/product-pay', async(req, res) => {
    let errors = []
    let _ispayed = false

    let { _id } = req.query
    let userId = req.session._id
    if (!userId) {
        let infoService = await modelService.findOne({ _id });
        errors.push({ message: "جهت ثبت سفارش باید در سیستم وارد شوید" })
        return res.render('product-details', {
            pageTitle: 'وینو تیم | سرویس',
            path: '/product-details',
            text: '',
            errors,
            Data: infoService,
            session: req.session.user,

        })
    }
    const serviceCurr = await modelService.findOne({ _id })
    let checkUser = await model.findOne({ _id: userId })
    let { orders } = checkUser

    orders.forEach(async element => {
        let getId = element._id.toHexString()
        if (getId === _id) {
            _ispayed = true
            let infoService = await modelService.findOne({ _id });
            errors.push({ message: "شما این سرویس را قبلا خریداری کرده اید" })
            return res.render('product-details', {
                pageTitle: 'وینو تیم | سرویس',
                path: '/product-details',
                text: '',
                errors,
                Data: infoService,
                session: req.session.user,

            })
        }
    });
    if (!_ispayed) {
        await model.updateOne({ _id: userId }, { $push: { orders: serviceCurr } })
        errors.push({ message: "سرویس با موفقیت خریداری شد ، لطفا منتظر بمانید تا با شما تماس بگیریم" })
        return res.render('product-details', {
            pageTitle: 'وینو تیم | سرویس',
            path: '/product-details',
            text: '',
            errors,
            Data: serviceCurr,
            session: req.session.user,

        })
    }
})
router.get('/product-details', async(req, res) => {
    let { _id } = req.query
    let infoService = await modelService.findOne({ _id });

    res.render('product-details', {
        pageTitle: 'وینو تیم | سرویس',
        path: '/product-details',
        text: infoService.name,
        session: req.session.user,
        Data: infoService
    })
})
router.post('/product-details', async(req, res) => {
    let { _id } = req.query
        //let infoService = await model.findOne({ _id });
    let form = req.body
    let today = new Date().toLocaleDateString('fa-IR');
    form["time"] = today

    let save = await modelService.updateOne({ _id: _id }, { $push: { userOpinions: form } })
    if (save) {
        res.redirect("/product-details/?_id=" + _id)
    }
})
module.exports = router;