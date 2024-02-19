const express = require('express')
const app = express()
const cors = require('cors');

const accountRouter = require('./routes/account.router')

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api', accountRouter)

const port = 3002

app.listen(port,  () =>{
    console.log("Listening on port: ",  port)

})
