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


app.post("/create", (req,res)=>{
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

app.listen(3000)