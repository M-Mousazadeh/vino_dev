exports.index= (req, res)=>{
    res.render('about',{
        pageTitle : 'وینو تیم | درباره ما',
        path : '/about',
        text : 'درباره ما',
        session : req.session.user
    })
}