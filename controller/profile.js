exports.index = (req, res) => {
    if (req.session.user) {
        res.render('profile', {
            pageTitle: 'وینو تیم |  پروفایل',
            path: '/profile',
            text: "پروفایل",
            session: req.session.user
        })
    } else {
        res.redirect('/account/404')
    }
}