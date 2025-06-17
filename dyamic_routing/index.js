const express = require("express")
const path = require("path")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/profile/:username",(req,res)=>{
    res.send(`welcome ${req.params.username}` )
})
app.get("/profile/:username/:age",(req,res)=>{
    res.send(`welcome, ${req.params.username} you are ${req.params.age} years old` )
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false;
    }
    console.log("Server is running at port : " + port)
})

