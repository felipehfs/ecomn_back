const Itens = require('../model/_item_prod');

module.exports = {
    async index(req, res){
        const { options_p } = req.query;
        
        const Itens = await Itens.find({ options_p : options_p });

        return res.json(Itens);
    },

    async store(req, res){
        const { filename } = req.file;
        const { name, description, price, options_p } = req.body;
        const { product_id } = req.headers;

        //const item_find = await Itens.findById(name);

        //if(!item_find){
        //    return res.status(400).json({error: "Não há itens cadastrados!"});
        //}
        
        const Itens = await Itens.create({
            name,
            image: filename,
            price,
            options: options_p.split(','),
            product_id
        });

        return res.json(Itens);
    }
};