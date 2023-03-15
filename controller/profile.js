exports.index = (req, res) => {
    res.render('profile', {
        pageTitle: 'وینو تیم |  پروفایل',
        path: '/profile',
        text: "پروفایل",
        session: req.session.user
    })
}