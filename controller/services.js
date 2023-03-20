const { modelService } = require('../model/Services');

exports.index = async(req, res) => {
    let datas = await modelService.find()

    res.render('services', {
        pageTitle: 'وینو تیم | خدمات',
        path: '/services',
        text: 'خدمات',
        session: req.session.user,
        Data: datas
    })
}