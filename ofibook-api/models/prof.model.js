const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const PostSchema = new Schema ({
    Profecion: {
        type: String,
        trim: true,
        required: true,
    },

},{ timestamps: true });

module.exports = Mongoose.model('Prof', PostSchema);  