const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {type: String, default: "Anonymous"},
    content: {type: String, required: true},
    datePosted: { type: Date, default: Date.now },
    replies: {type: Array},
    likes : {type: Number, default: 0}
})


module.exports = {
    model: mongoose.model('commentSchema', CommentSchema),
    schema: CommentSchema
}
