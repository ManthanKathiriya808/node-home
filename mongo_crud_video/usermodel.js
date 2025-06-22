const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mongopractice")

// const db = mongoose.connection()

// db.on("connected",(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }

//     console.log("db connected")
// })

// module.exports = db

const userSchema = mongoose.Schema({
    name:String,
    email:String
})

module.exports =  mongoose.model("user",userSchema)