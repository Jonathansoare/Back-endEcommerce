const Favorite = require("../../models/Favorite");
const Products = require("../../models/Products");
const Imagens = require("../../models/Imagens");
const { Op } = require('sequelize');

async function getProductsAll(req, res) {
    try {
        const { idOrName, partialName } = req.query;
        const userId = req.user ? req.user.id : null;

        const whereClause = {};

        if (idOrName) {
            whereClause[Op.or] = [
                { id: idOrName },
                { name: idOrName },
            ];
        } else if (partialName) {
            whereClause[Op.or] = [
                {
                    name: {
                        [Op.like]: `%${partialName}%`,
                    },
                },
                {
                    description: {
                        [Op.like]: `%${partialName}%`,
                    },
                },
            ];
        }

        const produtos = await Products.findAll({
            where: whereClause,
            attributes: ['id', 'price', 'name', 'description', 'BrandName', 'quantityInStock', 'type', 'rating'],
            include: [
                {
                    model: Imagens,
                    attributes: ['id', 'imageUrl'],
                },
            ],
        });

        if (produtos.length === 0) {
            return res.status(404).json({ message: 'Nenhum produto encontrado.' });
        }

        // Verificar quais produtos estão nos favoritos do usuário
        const favorites = await Favorite.findAll({
            where: { userId, productId: produtos.map(product => product.id) },
            attributes: ['productId'],
        });

        const productIdsInFavorites = favorites.map(favorite => favorite.productId);

        // Mapear os detalhes dos produtos por id para facilitar o acesso
        const productsMap = {};
        produtos.forEach(product => {
            productsMap[product.id] = {
                ...product.toJSON(),
                isFavorite: productIdsInFavorites.includes(product.id),
            };
        });

        const productsWithFavorites = Object.values(productsMap);

        return res.status(200).json({
            produtos: productsWithFavorites,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar produtos.' });
    }
}

module.exports = {
    getProductsAll,
};
