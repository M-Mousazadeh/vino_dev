exports.index = (req, res)=>{
    res.render('career',{
        pageTitle : 'وینو تیم | کسب و کار ها',
        path : '/career',
        text : 'کسب و کار ها',
        session : req.session.user
    })
}