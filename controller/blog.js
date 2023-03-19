const { model } = require('../model/Blogs');

exports.index = async(req, res) => {
    let blogs = await model.find();
    console.log(blogs)
    res.render('blog', {
        pageTitle: 'وینو تیم | بلاگ',
        path: '/blog',
        text: 'بلاگ',
        session: req.session.user,
        Data: blogs
    })
}