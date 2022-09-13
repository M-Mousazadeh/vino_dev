const {Router} = require('express');

const router = new Router()

// @desc 404 page
// @desc anyRoute GET
router.use((req, res)=>{
    res.render('404',{
        pageTitle : 'وینو تیم | صفحه پیدا نشد',
        path: '/404',
    })
})

module.exports = router;
