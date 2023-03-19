const { Router } = require('express');
const { model } = require('../model/Services');

const router = new Router()

router.get('/product-details', async(req, res) => {
    let { _id } = req.query
    let infoService = await model.findOne({ _id });

    res.render('product-details', {
        pageTitle: 'وینو تیم | سرویس',
        path: '/product-details',
        text: infoService.name,
        session: req.session.user,
        Data: infoService
    })
})

module.exports = router;