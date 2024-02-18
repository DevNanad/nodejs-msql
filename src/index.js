const express = require("express")
const app = express()
const path = require('path')

const multer = require ('multer')
const storage = multer.diskStorage({
      destination: (req, file, cb) =>{
        cb (null, 'Images')
      },
      filename:(req,file,cb) =>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
      }
})


const upload = multer({storage: storage})

app.set("view engine", "ejs ")

app.get("/upload", (req, res) => {
    res.render("upload")
})
app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image Uploaded")
})
app.listen(3002)
    console.log("3002 is the port")
