const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const {model} = require('../model/Users');

exports.register = (req, res)=>{
    res.render('register', {
        pageTitle : 'وینو تیم | ثبت نام',
        path : '/register',
        text : '',
    })
}

exports.login = (req, res)=>{
    res.render('login', {
        pageTitle : 'وینو تیم | ورود ',
        path : '/login',
        text : '',
        message : req.flash('success_msg')
    })
}

exports.createUser = async(req, res)=>{
    const errors = [];
    try {
        await model.userValidation(req.body)
        const {email, password} = req.body
        const user = await model.findOne({email});
        console.log(user);
        if(user){
            errors.push({message : 'کاربری با این ایمیل موجود است'});
            return res.render('register',{
                    pageTitle : 'وینو تیم | ثبت نام',
                    path : '/register',
                    text : '',
                    errors
                })
        }
        const hash = await bcrypt.hash(password, 10);
        await model.create({
            email,
            password : hash
        })
        req.flash('success_msg','ثبت نام موفقیت آمیز بود')
        res.redirect('/account/login')
    } catch (errs) {
        errs.inner.forEach(err=>{
            errors.push({name : err.path, message : err.message})
        })
        res.render('register',{
            pageTitle : 'وینو تیم | ثبت نام',
            path : '/register',
            text : '',
            errors
        })
        console.log(errs);
    }
    
}

exports.forgot = (req, res)=>{
    res.render('forgot',{
        pageTitle : 'وینو تیم | فراموشی رمز عبور',
        path : '/login',
        text : ''
    })
}

exports.sendLink = async(req, res)=>{
    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.email',
        port : 587,
        secure : false,
        service : 'gmail',
        auth : {
            user: process.env.SMTP_User,
            pass : process.env.SMTP_Pass
        }
    });

    await transporter.sendMail({
        from: '"Vino Devs" <vinodevs.official@gmail.com>', // sender address
        to: req.body.email,
        subject: "Your reset link", // Subject line
        text: `in order to change your password click on the link below\n http://localhost:8080/account/forgot/${req.body.email}`, // plain text body
        //html: `<a href=localhost:8080/account/forgot/${req.body.email} style= "border: 1px solid #888; background-color : #444; color : #eee; padding: 10px;">تغییر کلمه عبور</a>`, // html body
      }).catch(err=>{
        console.log(err);
      })
      res.redirect('/')
}