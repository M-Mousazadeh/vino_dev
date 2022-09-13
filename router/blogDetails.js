const {Router} = require('express');

const router = new Router();

// @desc blog page
// @desc /blogDetails GET
router.get('/blogDetails', (req, res)=>{
    res.render('blog-details',{
        pageTitle : 'وینو تیم | اطلاعات بلاگ',
        path : '/blogDetails',
        text : 'اطلاعات بلاگ',
    })
})

module.exports = router;