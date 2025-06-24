const cookieParser = require("cookie-parser")
const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const jwt = require("jsonwebtoken")
app.use(cookieParser())

app.get("/",(req,res)=>{

  let token=  jwt.sign({email:"manthan808@gmail.com"} ,"secret")
// console.log(token)


res.cookie("token",token)
// console.log(token)
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("manthan", salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash)
//     });

//     bcrypt.compare("manthan", "$2b$10$O.uED20CZ7kHVsx1I5N2/OZPGmhRI5sydrmNjeo6uc3gC5lDIVR0a", function(err, result) {
//     console.log(result)
// });
// });
    // res.cookie("name","harsh")
    res.send("done")
})
app.get("/read",(req,res)=>{


   let data= jwt.verify(req.cookies.token, "secret")

    console.log(data)
    // console.log(req.cookies.token)
    // res.cookie("name","harsh")
    // console.log(req.cookies)
    res.send("done read")
})

app.listen(3000)