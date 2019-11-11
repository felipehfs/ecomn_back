const mongoose = require('mongoose');

const ItemProductSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    options_p:[String],
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductID"
    }
});

module.exports = mongoose.model('ItemProduct', ItemProductSchema);