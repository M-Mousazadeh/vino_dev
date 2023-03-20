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

exports.save = async(req, res) => {
    let { _id } = req.query
        //let infoService = await model.findOne({ _id });
    let form = req.body
    let today = new Date().toLocaleDateString('fa-IR');
    form["time"] = today

    let save = await model.updateOne({ _id: _id }, { $push: { userOpinions: form } })
    console.log(save)
    if (save) {
        res.redirect("/blogDetails/?_id=" + _id)
    }
}