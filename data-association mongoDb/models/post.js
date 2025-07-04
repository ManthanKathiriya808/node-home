const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userTbl'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const postTbl = mongoose.model("postTbl", postSchema);

module.exports = postTbl;