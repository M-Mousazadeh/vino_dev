exports.index = (req, res)=>{
    res.render('projects',{
            pageTitle : 'وینو تیم | پروژه ها',
            path : '/p',
            text : "پروژه ها",
    })
}