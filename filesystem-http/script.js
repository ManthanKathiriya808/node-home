const fs = require("fs")

// fs.writeFile("hey.txt","hey hi am manthan",(err)=>{
//     if(err){
//     console.log(err)

//     }
//     else{
//         console.log("done")
//     }
// })


 
                //   Append File

// fs.appendFile("hey.txt","hey hi am manthan",(err)=>{
//     if(err){
//     console.log(err)

//     }
//     else{
//         console.log("done")
//     }
// })



                //   rename File
                    

// fs.rename("hey.txt","hello.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("changed name")
// })


                //   copy File
                

// fs.copyFile("hello.txt","./copy/copy.txt",(err)=>{
//        if(err) console.log(err.message)
//     else console.log("filedcopied")
// })


                //   unlink File

fs.unlink("hello.txt",(err)=>{
         if(err) console.log(err.message)
     else console.log("deleted")
})



            // rmdir for folder delete 

// fs.rm('./copy',{recursive : true},(err)=>{
//       if(err) console.log(err.message)
//      else console.log("removed")
// })

fs.readFile('hey.txt',"utf8",(err,data)=>{
       if(err) console.log(err.message)
     else console.log(data)
})
                

