const Products = require("../../models/Products");
const Imagens = require("../../models/Imagens");

async function cadastrar(req, res) {
    const { name, price, BrandName, description, quantityInStock, imagens, type,rating } = req.body;

    try {
        const createProducts = await Products.create({
            name,
            price,
            BrandName,
            description,
            type,
            quantityInStock,
            rating
        });

        if (imagens) {
            await Imagens.create({
                productId: createProducts.id,
                imageUrl: imagens,
            });
        }

        return res.status(201).json({
            id: createProducts.id,
            name: createProducts.name,
            price: createProducts.price,
            description: createProducts.description,
            BrandName: createProducts.BrandName,
            quantityInStock: createProducts.quantityInStock,
            type: createProducts.type,
            rating: createProducts.rating
        });
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        return res.status(500).json({ error: 'Erro ao cadastrar produto.' });
    }
}

module.exports = {
    cadastrar
};
