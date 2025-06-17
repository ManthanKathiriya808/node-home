const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")
// app.use(express.path.join(__dirname,"public"))
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
const port = 3000

app.get("/",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        // console.log(file)
        res.render("index",{
            files:files
        })
    }    )
})
app.get("/file/:filename",(req,res)=>{
    
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        // console.log(filedata)
        res.render("show",{
            filename : req.params.filename,
            filedata
        })

    })  
})


app.get("/edit/:filename",(req,res)=>{
    res.render("edit",{
        filename:req.params.filename
    })
})

app.post("/edit",(req,res)=>{
    console.log(req.body)

    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        res.redirect("/")
    })
})


app.post("/create",(req,res)=>{

    // console.log(req.body)

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect("/")
    })
    
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }

    console.log("server is running at port : " + port)
})