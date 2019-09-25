const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./comment-schema').schema;
const PostSubsectionSchema = require ('./post-subsection-schema').schema;


const PostSchema = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    datePosted: { type: Date, default: Date.now },
    body: {
        intro: String,
        subsections: PostSubsectionSchema
    },
    subsections: [PostSubsectionSchema],
    views: Number
})