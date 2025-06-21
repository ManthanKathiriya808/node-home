const express = require("express")
const fs = require("fs")
const port = 3000

const app = express()
app.use(express.json())
app.set("view engine" , "ejs")
app.use(express.urlencoded({ extended: true }))

app.post("/insert",(req,res)=>{
  

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,`${req.body.content}`,(err)=>{
        if(err){
            console.log(err)
            return false
        }
        res.redirect("/")
    })
    
})


app.get("/file/:filename",(req,res)=>{

    fs.readFile(`./files/${req.params.filename}`, "utf-8",(err,filedata)=>{
        res.render("show",{
          filename:req.params.filename,
          filedata
        })
    })
})

app.get("/",(req,res)=>{

    fs.readdir(`./files`,(err,files)=>{
        res.render("index",{
            files
        })

    })

})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("port is runnig at : " + port)
})