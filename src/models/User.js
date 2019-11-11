const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('User', UserSchema);