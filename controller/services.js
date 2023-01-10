exports.index = (req, res)=>{
    res.render('services',{
        pageTitle : 'وینو تیم | خدمات',
        path : '/services',
        text : 'خدمات',
        session : req.session.user
    })
}