var mongoose = require("mongoose");

module.exports = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            requires: true
        },
        body: {
            type: String,
            requires: true
        },
        comments: [{ body:String, date:Date}],
        date: {type:Date,defaukt: Date.now},
        hidden:{type:Boolean, default: false},
        meta:{
            votes:Number,
            favs:Number
        }
    }
);