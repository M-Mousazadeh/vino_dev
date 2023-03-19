const { model } = require('../model/Careers');

exports.index = async(req, res) => {

    let projects = await model.find();
    res.render('projects', {
        pageTitle: 'وینو تیم | نمونه کار ها',
        path: '/p',
        text: "نمونه کار ها",
        session: req.session.user,
        array: projects
    })
}