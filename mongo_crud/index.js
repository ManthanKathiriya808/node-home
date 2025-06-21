const express = require("express")
const db = require("./config/db")
const adminTbl = require("./model/adminTbl")

const port = 3000;



const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded())


app.post("/insert",(req,res)=>{
    // console.log(req.body)
    const {name,email,phone,password} = req.body

    adminTbl.create({
        name,
        email,
        phone,
        password
    })
    .then((data)=>{
        console.log(" Data inserted successfull")
        return false
    })
    .catch((err)=>{
           console.log(err)
        return false
    })

    res.redirect("/")

})
app.post("/editData",(req,res)=>{

    const {id,name,email,phone,password} = req.body

    adminTbl.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        password
    })
    .then((data)=>{
          
    res.redirect('/')
          return false
        })
    .catch((err)=>{
            console.log(err)
            return false
    })

}

)


app.get("/edit/:id",(req,res)=>{
    const id = req.params.id    
    adminTbl.findById(id)
    .then((data)=>{

        res.render("edit",{
            data
        })
        return false
    })
    .catch((err)=>{
        console.log(err)
        return false
    })



})

app.get("/delete/:id",(req,res)=>{
    const id = req.params.id
    // console.log(id)
    adminTbl.findByIdAndDelete(id)
     .then((data)=>{
     console.log("deleted successfull")
        return false
    })
    .catch((err)=>{
        console.log(err)
        return false
    })

    res.redirect("/")
    
})

app.get("/",(req,res)=>{
   

    adminTbl.find()
    .then((data)=>{
        res.render("index",{
            data
        })
        return false
    })
    .catch((err)=>{
        console.log(err)
        return false
    })
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }

    console.log("server is running at port : " + port)
})