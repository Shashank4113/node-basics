var mongoose = require('mongoose');
var { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    money: {
        type: String,
        required: true,
        maxlength: 20
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    noOfQuantity: {
        type: String
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        ContentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);