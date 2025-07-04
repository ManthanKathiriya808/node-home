const express = require("express")
const app = express();
const db = require("./config/db");
const postTbl = require("./models/post");
const userTbl = require("./models/userTbl");

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.get("/create", async (req,res)=>{
   
   let user = await userTbl.create({
     username:"Manthan",
    email:"manthan@gmail.com",
    age:"21",
    })

    res.send(user);
})


app.get("/post/create", async (req,res)=>{
   
    let posts = await postTbl.create({
                postdata: "hello how r u",
                user: '68675722ceb43e3a84863287',
            
    })

    let user = await userTbl.findById('68675722ceb43e3a84863287');
    user.posts.push(posts._id);
    await user.save();
    res.send({posts, user});
   
})



app.listen(3000,(err)=>{
    if(err){
        return false
    }
    console.log("Server is running on port 3000");
})