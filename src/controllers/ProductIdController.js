const ProductID = require('../models/ProductID');

module.exports = {
    async store(req, res){
        const { user } = req.headers;
        const { product_id } = req.params;
        const { date } = req.body;

        const productid = await ProductID.create({
            user,
            product: product_id,
            date,
        });

        await productid.populate('products').populate('product_id').execPopulate();

        return res.json(productid);
    }
}