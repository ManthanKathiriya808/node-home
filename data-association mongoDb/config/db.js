const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingDB')

const db = mongoose.connection;

db.on("connected",(err)=>{
      if(err){
        return false
    }
    console.log("db is running");

})

module.exports = db;