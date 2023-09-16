module.exports = ()=>{
    const nodemailer = require('nodemailer')
    require('dotenv').config()

    const password = process.env.EMAIL_PASSWORD

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rauatorres@gmail.com',
            pass: password
        }
    })

    contactEmail.verify((error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Ready to send")
        }
    })

    return contactEmail
}