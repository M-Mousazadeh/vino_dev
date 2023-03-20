const { model } = require('../model/Users');

exports.index = async(req, res) => {

    const iduser = req.session._id
    let userInfo = await model.findOne({ iduser })
    console.log(userInfo.orders)
    if (req.session.user) {
        res.render('profile', {
            pageTitle: 'وینو تیم |  پروفایل',
            path: '/profile',
            text: "پروفایل",
            session: req.session.user,
            user: userInfo,
            orders: userInfo.orders
        })
    } else {
        res.redirect("/404")
    }
}

exports.setting = async(req, res) => {
    let form = req.body
    const _id = req.session._id
    await model.updateOne({ _id: _id }, { $set: { "phoneNumber": form.phonenumber, "name": form.name } })
    res.redirect('/')
}