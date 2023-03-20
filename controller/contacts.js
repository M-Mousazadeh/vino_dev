const nodemailer = require('nodemailer');
exports.index = (req, res) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        service: 'gmail',
        auth: {
            user: process.env.SMTP_User,
            pass: process.env.SMTP_Pass
        }
    });

    transporter.sendMail({
        from: '"Vino Devs" <vinodevs.official@gmail.com>', // sender address
        to: "vinodevs.official@gmail.com",
        subject: req.body.subject,
        text: "All new message:" + { name: req.body.name, name: req.body.email, name: req.body.phone, name: req.body.message },
    }).catch(err => {
        console.log(err);
    })

    res.render('contact', {
        pageTitle: 'وینو تیم | تماس با ما',
        path: '/contact',
        text: 'تماس با ما',
        session: req.session.user
    })
}