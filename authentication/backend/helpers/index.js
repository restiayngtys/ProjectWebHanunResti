const nodemailer = require('nodemailer');

exports.kirimEmail = dataEmail => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        requireTLS: true,
        auth: {
            user: 'haanuun@gmail.com', 
            pass: 'jfrtbqingcmxiahn', 
        },
    });
    return (
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email Terkirim: ${info.message}`))
        .catch(err => console.log(`Terjadi Kesalahan: ${err}`))
    )
}