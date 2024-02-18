const express = require('express')
const accountRouter = require('./routes/Accounts')


const app = express()

/* middleware*/
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', accountRouter)

app.get('/', (req, res) =>{
    res.send("hellow world")
})

const port = 3002

app.listen(port,  () =>{
    console.log("Listening on port: ",  port)

})
