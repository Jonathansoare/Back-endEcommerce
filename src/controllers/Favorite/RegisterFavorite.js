const Favorite = require("../../models/Favorite");
const Log = require("../../models/Log");

async function RegisterFavorite(req, res) {
  const { productId, userId } = req.body;
  try {
    // Verifica se já existe um favorito para esse produto e usuário
    const existingFavorite = await Favorite.findOne({
      where: { productId, userId },
    });

    if (existingFavorite) {
      return res.status(401).json({ error: 'Produto já esta como favorito!' });
    }

    const createFavorite = await Favorite.create({
      productId,
      userId,
    });

    const log = await Log.create({
      msg: `O usuário ${userId} adicionou o produto ${productId} aos favoritos`,
      userId: userId,
      changedItemId: productId,
      actionPerformed: "Create",
    });

    return res.status(201).json({
      id: createFavorite.id,
      productId: createFavorite.productId,
      userId: createFavorite.userId,
      msg:"Produto favoritado"
    });
  } catch (error) {
    console.error('Erro ao cadastrar produto aos favoritos:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar produto aos favoritos.' });
  }
}

module.exports = { RegisterFavorite };
