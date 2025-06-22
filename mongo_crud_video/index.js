const express = require("express")

const app = express()
const port = 3000
const userModel = require("./usermodel")


app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/create", async (req,res)=>{
    
  let creatUser = await userModel.create({
        name:"John",
        email:"john@gmail.com",
    })

res.send(creatUser)

})
app.get("/update", async (req,res)=>{
    
  let updateUser = await userModel.findOneAndUpdate({name : "John"}, {email : "john123@gmail.com"},{ new:true })

res.send(updateUser)

})
app.get("/delete", async (req,res)=>{
    
  let deleteData = await userModel.findOneAndDelete({name : "John"})

res.send(deleteData)

})
app.get("/read", async (req,res)=>{
    
  let readUser = await userModel.find()

res.send(readUser)

})




app.listen(port,(err)=>{
    if(err) console.log(err)
    
        console.log("port is ruunig at  " + port)
})