const {Router} = require('express');

const router = new Router()

// @desc career datails page
// @desc /careerDetails GET
router.get('/careerDetails', (req, res)=>{
    res.render('career-details',{
        pageTitle : 'وینو تیم | اطلاعات کسب و کار',
        path : '/careerDetails',
        text : 'اطلاعات کسب و کار'
    })
})

module.exports = router;