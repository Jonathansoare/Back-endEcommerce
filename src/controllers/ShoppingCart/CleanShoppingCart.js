const ShoppingCart = require('../../models/ShoppingCart');

async function CleanShoppingCart(req,res) {
    try {
      await ShoppingCart.destroy({
        where: {},
        truncate: true // Esta opção garante que todos os registros sejam removidos
      });
  
      res.status(201).json({ message: 'Carrinho de compras limpo com sucesso.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao limpar os produto do carrinho' });
    }
  }

module.exports = {CleanShoppingCart}