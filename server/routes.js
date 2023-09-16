module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.send('funcionando')
    })
    app.get('/sendemail', (req, res)=>{
        res.send('funcionando')
    })

    app.post('/sendemail', (req, res)=>{
        require('./sendEmail')(app, req, res)
    })
}
