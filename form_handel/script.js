const express = require("express")

const app = express()

const port = 8000

app.use(express.json())
app.use(express.urlencoded(
    {
        extended:true
    }
))

app.use((req,res,next)=>{
    console.log("this is middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("this is middleware for next time")
    next()
})

app.get('/',(req,res)=>{
    console.log("hellow world")
    res.send("Hello world")
})



app.get('/about',(req,res)=>{
    // console.log("hellow world")
    res.send(" this is an About page ")
})
app.get('/contact',(req,res)=>{
    // console.log("hellow world")
    res.send(" contact page ")
})
app.get('/checkout',(req,res,next)=>{
    return next(new Error("sometthing went wrong"))
    // res.send(" checkout page ")
    // console.log("hellow world")
})


app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('someting broke    ')
})

app.listen(8000,(err)=>{
    if(err){
        console.log("server did not run")
        return false
    }

    console.log("server is runnuing on the port : " + port )
})