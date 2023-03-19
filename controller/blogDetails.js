const { model } = require('../model/Blogs');
const { categoriesModel } = require('../model/Categories');

exports.index = async(req, res) => {
    let { _id } = req.query

    //let today = new Date().toLocaleDateString('fa-IR');

    let infoBlog = await model.findOne({ _id })
    let allBlogs = await model.find()
    let cates = await categoriesModel.find()

    res.render('blog-details', {
        pageTitle: 'وینو تیم | اطلاعات بلاگ',
        path: '/blogDetails',
        text: 'اطلاعات بلاگ',
        session: req.session.user,
        Data: infoBlog,
        posts: allBlogs,
        categories: cates
    })
}