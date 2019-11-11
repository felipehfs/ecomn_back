const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   thumbnail: String,
   name: String,
   price: Number,
   optionsp: [String],
   categories:[String],
   date: String,
   description: String,
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
});

module.exports = mongoose.model('Product', ProductSchema);