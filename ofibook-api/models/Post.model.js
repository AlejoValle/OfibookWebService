const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const PostSchema = new Schema ({
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
    user: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        default: [],
    }, 
    likes: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        default: [],
      }     
},{ timestamps: true });

module.exports = Mongoose.model('Post', PostSchema);  