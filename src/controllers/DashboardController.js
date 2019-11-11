const Product = require('../models/Product');

module.exports = {
    async show(req, res){
        const { user } = req.headers;

        const product = await Product.find({ users: user });

        return res.json(product);
    }
}