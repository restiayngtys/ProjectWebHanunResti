const express   = require('express');
const router    = express.Router();
const { DaftarUser, LoginUser, getSingleUser, forgotPassword, resetPassword } = require('../controller/user.controller');
const { runValidation, validationDaftar, validationLogin } = require('../validation')
const middleware = require('../middleware/middleware');

router.post('/daftar', validationDaftar, runValidation, DaftarUser);
router.post('/Login', validationLogin, runValidation, LoginUser);
router.get('/user', middleware, getSingleUser);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);

module.exports = router