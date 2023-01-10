module.exports = (req, res)=>{
    res.render('profile',{
        pageTitle : 'وینو تیم |  پروفایل',
        path : '/profile',        
        session : req.session.user
    })
}