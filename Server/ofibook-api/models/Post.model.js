const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const PostSchema = new Schema ({
    User: {
        type: [Schema.Types.ObjectId],
        ref: "Username",
        default: [],
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
    },
    hidden: {
        type: Boolean,
        default: false,
    },        
},{ timestamps: true });

module.exports = Mongoose.model('Post', PostSchema); 