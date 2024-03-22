const Favorite = require("../../models/Favorite");
const Products = require("../../models/Products");
const Imagens = require("../../models/Imagens");

async function GetFavorite(req, res) {
    try {
        const id = req.params.id || null;

        let whereCondition = {};

        if (id) {
            whereCondition.userId = id;
        }

        const favorites = await Favorite.findAll({
            where: whereCondition,
            attributes: ['id', 'userId', 'productId'], // Selecionando apenas os campos desejados para os favoritos
        });

        if (favorites.length === 0) {
            return res.status(204).json({ message: 'Nenhum favorito encontrado' });
        }

        const productIds = favorites.map(favorite => favorite.productId);

        // Buscar os detalhes dos produtos associados aos favoritos
        const productsDetails = await Products.findAll({
            where: { id: productIds },
            attributes: ['id', 'name', 'price', 'BrandName', 'description', 'quantityInStock', 'type', 'rating'], // Campos desejados para os produtos
            include: [
                {
                    model: Imagens,
                    attributes: ['id', 'imageUrl'], // Campos desejados para as imagens
                },
            ],
        });

        // Mapear os detalhes dos produtos por id para facilitar o acesso
        const productsMap = {};
        productsDetails.forEach(product => {
            productsMap[product.id] = product;
        });

        // Atualizar a estrutura dos favoritos para incluir os detalhes do produto com a imagem
        const favoritesWithProducts = favorites.map(favorite => {
            const productDetails = productsMap[favorite.productId];
            return {
                id: favorite.id,
                userId: favorite.userId,
                productId: favorite.productId,
                product: productDetails,
            };
        });

        res.status(200).json({ favorites: favoritesWithProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar favoritos' });
    }
}

module.exports = { GetFavorite };
