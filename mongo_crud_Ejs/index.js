const express = require("express")
const path = require("path")

const port = 3000;



const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))




app.get("/",(req,res)=>{
    res.send("hello")

})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }

    console.log("server is running at port : " + port)
})