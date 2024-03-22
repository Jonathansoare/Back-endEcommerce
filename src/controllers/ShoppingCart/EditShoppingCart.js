const ShoppingCart = require('../../models/ShoppingCart');

async function EditShoppingCart(req, res) {
    const id = req.params;
    const {productId,userId,amount} = req.body

  try {
    const ShoppingCarts = await ShoppingCart.findByPk(id.id);
    
    if (!ShoppingCarts) {
      return res.status(404).json({ error: 'produto do carrinho não encontrado' });
    }

    // Crie um objeto para armazenar os campos a serem atualizados
    const updatedFields = {};
    if (productId) {
      updatedFields.productId = productId;
    }
    if (userId) {
      updatedFields.userId = userId;
    }
    if (amount) {
      updatedFields.amount = amount;
    }
    await ShoppingCarts.update(updatedFields);

    res.json({ message: 'Produto do carrinho atualizados com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao atualizar o produto do carrinho' });
  }
}

module.exports = {
    EditShoppingCart
}