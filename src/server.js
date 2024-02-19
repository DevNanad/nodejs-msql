const express = require('express')
const app = express()

const accountRouter = require('./routes/Accounts')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api', accountRouter)

const port = 3002

app.listen(port,  () =>{
    console.log("Listening on port: ",  port)

})
