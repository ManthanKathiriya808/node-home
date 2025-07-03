const cookieParser = require("cookie-parser")
const express = require("express")
const path = require("path")
const bcrypt = require("bcrypt")
const app = express()
const userModel = require("./models/user")
const jwt = require("jsonwebtoken")
app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.render("index")
})


app.post("/create",  (req,res)=>{
    let {username,email,password,age} = req.body

    bcrypt.genSalt(10, (err,salt)=>{
       bcrypt.hash(password, salt ,async (err,hash)=>{


        let createUser = await userModel.create({
        username,
        email,
        password : hash,
        age
    })


        let token = jwt.sign({email},"shhhhhhh")
        res.cookie("token",token)


    res.send(createUser)
       }) 
    })




})

app.get("/logout", (req,res)=>{
    res.cookie("token","")
    res.redirect("/")
})
app.get("/login", (req,res)=>{
    res.render("login")
    
})

app.post("/logins", async (req,res)=>{
   let user = await userModel.findOne({email:req.body.email})
   if(!user) return res.redirect("/login")

    bcrypt.compare(req.body.password,user.password,function(err,result){

    if(result) {
        let token = jwt.sign({email :user.email},"shhhhhhh")
        res.cookie("token",token)
        res.send("you are logged in")
    }
    else{

        res.send("no you cannot login")
    } 
    }
)})    

app.listen(3000)