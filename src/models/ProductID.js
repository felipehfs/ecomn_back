const mongoose = require('mongoose');

const ProductIDSchema = new mongoose.Schema({
   date: String,
   approved: Boolean,
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
   productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'productid'
    }
});

module.exports = mongoose.model('ProductID', ProductIDSchema);