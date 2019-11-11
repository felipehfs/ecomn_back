const User = require('../models/User');
const Product = require('../models/Product');

module.exports = {
    async index(req, res){
        const { name } = req.query;
        const products = await Product.find({ names : name });
        return res.json(products);
    },

    async store(req, res){
        const { filename } = req.file;
        const { name, optionsp, price, description, date, categories } = req.body;
        const { user } = req.headers;
        const user_find = await User.findById(user);
        if(!user_find){
            return res.status(400).json({error: "usuário não existe"});
        }
        const product = await Product.create({
            user,
            thumbnail: filename,
            name,
            date,
            description,
            categories: categories.split(',').map( categories => categories.trim()),
            optionsp: optionsp.split(',').map( optionsp => optionsp.trim()),
            price
        });
        return res.json(product);
    }
};