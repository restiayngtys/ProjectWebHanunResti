const { check, validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg
        })
    }
    next()
}

exports.validationDaftar = [
    check('username', 'Username Tidak Boleh Kosong!').notEmpty(),
    check('email', 'Email Tidak Boleh Kosong!').notEmpty().matches(/.+\@.+\..+/).withMessage('Email Harus Menggunakan Tanda @'),
    check('password', 'Password Tidak Boleh Kosong!').notEmpty().isLength({min : 8}).withMessage('Password Minimal Terdiri Dari 8 Karakter'),
]

exports.validationLogin = [
    check('username', 'Username Tidak Boleh Kosong!').notEmpty(),
    check('password', 'Password Tidak Boleh Kosong!').notEmpty()
]