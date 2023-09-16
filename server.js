const {app} = require('./server/configs.js')
const dotenv = require('dotenv')

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server started successfully! Listening on port ${port}!`)
})