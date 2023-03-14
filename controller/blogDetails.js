exports.index = (req, res) => {
    res.render('blog-details',{
        pageTitle : 'وینو تیم | اطلاعات بلاگ',
        path : '/blogDetails',
        text : 'اطلاعات بلاگ',
        session : req.session.user
    })
}