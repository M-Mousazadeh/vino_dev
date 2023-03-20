const { model } = require('../model/Users');
const bcrypt = require('bcryptjs');

let II = "";
exports.index = (req, res) => {
    II = req.query._id
    res.render('resetpassword', {
        pageTitle: 'وینو تیم | رمزعبور جدید',
        path: '/reset',
        text: 'رمزعبور جدید',
    })
}
exports.reset = async(req, res) => {
    const errors = [];

    let { pass, conpass } = req.body

    if (pass != conpass) {
        errors.push({ message: "رمز عبور با تکرار آن یکسان نمیباشد" })
        return res.render('resetpassword', {
            pageTitle: 'وینو تیم | رمزعبور جدید',
            path: '/reset',
            text: '',
            errors
        })
    }
    console.log(II)
    const hash = await bcrypt.hash(pass, 10);
    const resultUser = await model.findOne({ _id: II })

    if (resultUser) {
        const resultReset = await model.updateOne({ _id: II }, { password: hash })
            //console.log(resultReset)
        if (resultReset) {
            res.redirect("/")
        }
    }
    res.render('resetpassword', {
        pageTitle: 'وینو تیم | رمزعبور جدید',
        path: '/reset',
        text: 'رمزعبور جدید',
    })
}