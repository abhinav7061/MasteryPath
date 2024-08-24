const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
})

const Blog = model('Blog', blogSchema);

module.exports = Blog;