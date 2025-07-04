const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[
      { 
        type : mongoose.Schema.Types.ObjectId, 
        ref:'postTbl'
    }
    ],

})

const userTbl  = mongoose.model("userTbl",userSchema);

module.exports = userTbl;