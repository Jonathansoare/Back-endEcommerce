const Favorite = require("../../models/Favorite")
const Log = require("../../models/Log")

async function DeleteFavorite(req, res) {
  try {
    const productId = req.params.id
    const userId = req.headers.authorization || 1

    const favoriteToDelete = await Favorite.findOne({
      where: {
        productId: productId,
        userId: userId,
      },
    });

    if (favoriteToDelete) {
      await favoriteToDelete.destroy();

      const log = await Log.create({
        msg: `O usuario ${userId} Retirou o produto ${productId} dos favoritos`,
        userId: userId,
        changedItemId: productId,
        actionPerformed: "Delete",
      });

      return res.status(200).json({ message: 'Favorito apagado com sucesso!' });
    }

    return res.status(404).json({ message: 'Produto não encontrado nos favoritos.' });
  } catch (error) {
    console.error('Erro ao apagar os favoritos:', error);
    return res.status(500).json({ message: 'Erro ao apagar os favoritos.' });
  }
}

module.exports = { DeleteFavorite };
