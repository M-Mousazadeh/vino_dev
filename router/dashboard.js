const {Router} = require('express');

const router = new Router();

// @desc dashboard main page
// @desc /dashboard/admin GET
router.get('/admin', (req, res)=>{
    res.render('dashboard',{
        pageTitle : 'وینو تیم | داشبورد',
        path : '/admin',
        layout : './layouts/dashLayout'
    })
})

module.exports = router;