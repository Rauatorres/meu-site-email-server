module.exports = (app, req, res)=>{
    const emailConfigs = require('./emailConfigs')()


    let data = req.body.mailerState

    let mailOptions = {
        from: data.email,
        to: 'rauatorres@gmail.com',
        subject: 'Meu site - novo contato',
        text: `
            nome: ${data.nome}
            telefone: ${data.tel}
l
            ${data.msg}
        `
    }

    emailConfigs.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Email enviado: ' + info.response)
        }
    })
}