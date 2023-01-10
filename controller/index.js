module.exports = (req, res)=>{
    res.render('index',{
        pageTitle : 'وینو تیم | صفحه اصلی',
        path : '/',
        clients : 3000,
        session : req.session.user
    })
}