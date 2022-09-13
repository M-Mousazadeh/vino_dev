exports.index = (req, res)=>{
    res.render('blog',{
        pageTitle : 'وینو تیم | بلاگ',
        path : '/blog',
        text : 'بلاگ'
    })
}