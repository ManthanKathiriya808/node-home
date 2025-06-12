const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello world")
})


server.listen(3000,(err)=>{
    if(err){
          console.log("server is not running...")
         return false
    }

    console.log("server runned")

})
