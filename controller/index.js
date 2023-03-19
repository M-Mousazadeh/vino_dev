let { model } = require("../model/Blogs")
let { empModel } = require("../model/Employees")
module.exports = async(req, res) => {
    let allblog = await model.find()
    let allteam = await empModel.find()
    res.render('index', {
        pageTitle: 'وینو تیم | صفحه اصلی',
        path: '/',
        clients: 3000,
        session: req.session.user,
        blogs: allblog,
        teams: allteam
    })
}