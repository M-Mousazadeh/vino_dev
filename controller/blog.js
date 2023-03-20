const { model } = require('../model/Blogs');
const { categoriesModel } = require('../model/Categories');
exports.index = async(req, res) => {

    let blogs = await model.find();
    let cates = await categoriesModel.find();

    res.render('blog', {
        pageTitle: 'وینو تیم | بلاگ',
        path: '/blog',
        text: 'بلاگ',
        session: req.session.user,
        Data: blogs,
        Categories: cates
    })
}