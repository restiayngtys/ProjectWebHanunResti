require('dotenv').config();
const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const { kirimEmail } = require('../helpers');

exports.DaftarUser = async (req, res) => {
    const { username, email, password } = req.body

    const emailUser = await User.findOne({email: email})
    const usernameuser = await User.findOne({username: username})

    if (usernameuser){
        return res.status(404).json({
            status: false, 
            message: 'Username Sudah Tersedia, Gunakan Username Yang Lain!'
        })
    }

    if (emailUser){
        return res.status(404).json({
            status: false, 
            message: 'Email Sudah Tersedia, Gunakan Email Yang Lain!'
        })
    }

    

    const hashPassword = await bcryptjs.hash(password, 10)
    const user = new User ({
        username : username,
        email: email,
        password: hashPassword,
    })

    user.save()

    return res.status(201).json({
        status: true,
        message: 'User Berhasil Didaftarkan!',
    })
}

exports.LoginUser = async (req, res) => {
    const { username, password } = req.body

    const datauser = await User.findOne({$or: [{username: username}, {email : username}]})
    if(datauser) {
        //Jika usernamenya tersedia->Proses Berhasil
        const passwordUser = await bcryptjs.compare(password, datauser.password )
        if(passwordUser) {
            const data = {
                id : datauser._id
            }
            const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET, )
            return res.status(200).json({
                messsage: 'Berhasil',
                token: token
            })
        } else {
            return res.status(404).json({
                status: false,
                messsage: 'Password Tidak Sesuai!',
            })
        }
        
    } else {
        return res.status(404).json({
            status: false,
            messsage: 'Username atau Email Tidak Tersedia!',
        })
    }
    
}

exports.getSingleUser = async (req, res) => {
    const user = await User.findOne({_id: req.id})
    return res.status(200).json({
        message:'Berhasil Dipanggil',
        data: user
    })
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({email: email})
    if(!user) {
        return res.status(200).json({
            status: false,
            message: "Email Tidak Tersedia!"
        })
    }
    
    const token = jsonwebtoken.sign({
        iduser: user._id
    }, process.env.JWT_SECRET)

    await user.updateOne({resetPasswordLink: token})

    const templateEmail = {
        from: 'HATI ENGLISH COURSE',
        to: email,
        subject: 'Link Reset Password',
        html: `<p>Silahkan Klik Link Di Bawah Ini Untuk Mengganti Password Anda</p> <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
    }

    kirimEmail(templateEmail)

    return res.status(200).json({
        status: true,
        message: 'Link Reset Password Berhasil Terkirim',
    })
}

exports.resetPassword = async (req, res) => {
    const { token, password } = req.body
    const user = await User.findOne({resetPasswordLink: token})
    if(user) {
        const hashPassword = await bcryptjs.hash(password, 10)
        user.password = hashPassword
        await user.save()
        return res.status(201).json({
            status: true,
            message: 'Password Berhasil Diganti!'
        })
    }
}