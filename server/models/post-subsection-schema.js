const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSubsectionSchema = new Schema({
    subTitle: {type: String, required: true},
    content: {typed: String, required: true},
    imageURLS: Array
})

module.exports = {
    model: mongoose.model('postSubsection', PostSubsectionSchema),
    schema: PostSubsectionSchema
}