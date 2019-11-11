const Itens = require('../model/_item_prod');

module.exports = {
    async show(req, res){
        const { product_id } = req.headers;

        const Itens = await Itens.find({ product_id : product_id });

        return res.json(Itens);
    }
}