module.exports = (app, req, res)=>{
    const emailConfigs = require('./emailConfigs')()


    let data = req.body

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
            res.send(error)
        }else{
            console.log('Email enviado: ' + info.response)
            res.send('Email enviado: ' + info.response)
        }
    })

}