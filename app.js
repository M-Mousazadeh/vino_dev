const express = require('express');
const dotEnv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const satics = require('./utils/static')
const connectDB = require('./config/db');

//* env file
dotEnv.config({ path: './config/config.env' })

const app = express();

//* BodyParser
app.use(express.urlencoded({ extended: false }));

//* Express session
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000,
        user: ""
    },
    resave: false,
    saveUninitialized: false
}))

//* Flash
app.use(flash())
app.use(cookieParser());
//* Template engine set up
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/mainLayout');
app.set('views', 'views');



//* Statics
satics(app);

//*DataBase
connectDB();

//*Routes
app.use(require('./router/index'));
app.use('/account', require('./router/profile'));
app.use(require('./router/about'));
app.use(require('./router/blog'));
app.use(require('./router/blogDetails'));
app.use(require('./router/careerDetails'));
app.use(require('./router/productDetails'));
app.use(require('./router/contact'));
app.use(require('./router/projects'));
app.use(require('./router/services'));
app.use('/account', require('./router/login'));
app.use('/account', require('./router/reset'));
app.use('/dashboard', require('./router/dashboard'));


//* 404
app.use(require('./router/404'))

const PORT = process.env.PORT;

app.listen(PORT, () => { console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`) });