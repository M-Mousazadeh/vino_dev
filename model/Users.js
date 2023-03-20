const mongoose = require('mongoose');

const { schema } = require('./secure/userValidation');

const userSchema = mongoose.Schema({
    // userName : {
    //     type: [String, 'نام کاربری معتبر نمیاشد'],
    //     required : [true, 'نام کاربری الزامی میباشد'],
    //     trim : true,
    //     unique : true,
    // },
    // fullName : {
    //     type : [String, 'نام و نام خانوادگی معتبر نمیباشد'],
    //     required : [true, 'نام و نام خانوادگی الزامی میباشد'],
    //     minLength : [4, 'حداقل طول نام و نام خانوادگی 4 کاراکتر میباشد'],
    //     maxLength : [255, 'حداکثر طول نام و نام خانوادگی 255 کاراکتر میباشد'],
    // },
    password: {
        type: String,
        required: [true, 'کلمه عبور الزامی است'],
        minLength: [4, 'حداقل طول کلمه عبور 4 کاراکتر است'],
        maxLength: [255, 'حداکثر طول کلمه عبور 255 کاراکتر است']
    },
    email: {
        type: String,
        required: [true, 'ایمیل الزامی میباشد'],
        unique: true,
    },
    // phoneNumber : {
    //     type : [String, 'شماره تلفن معتبر نمیباشد'],
    //     required: [true, 'شماره تلفن الزامی است'],
    //     minLength : [11, 'شماره تلفن حداقل باید 11 کاراکتر باشد'],
    //     maxLength : [11, 'شماره تلفن باید حداکثر 11 باشد'],
    //     unique : true
    // },
    isAdmin: {
        type: Boolean,
        required: [true, 'آیا ادمین است ؟'],
        default: false
    },
    name: {
        type: String,
        required: [false, 'نام'],
        default: false
    },
    phoneNumber: {
        type: String,
        required: [false, 'شماره تماس'],
        default: false
    },
    orders: {
        type: Array,
        default: false
    }
})

userSchema.statics.userValidation = function(body) {
    return schema.validate(body, { abortEarly: false });
}

exports.model = mongoose.model('User', userSchema);