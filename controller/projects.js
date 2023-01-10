exports.index = (req, res)=>{
    res.render('projects',{
            pageTitle : 'وینو تیم | نمونه کار ها',
            path : '/p',
            text : "نمونه کار ها",
            session : req.session.user
    })
}