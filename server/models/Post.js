const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    author:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    topic:{
        type: String,
        require: true
    },
    body:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default:  Date.now
    }
});

module.exports = mongoose.model("Post",PostSchema);