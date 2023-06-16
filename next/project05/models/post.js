import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    _id: {
        type: Object,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    commentsActive: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.models.Post || mongoose.model('Post',postSchema);