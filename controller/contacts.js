exports.index = (req, res)=>{
    res.render('contact',{
        pageTitle : 'وینو تیم | تماس با ما',
        path : '/contact',
        text : 'تماس با ما'
    })
}