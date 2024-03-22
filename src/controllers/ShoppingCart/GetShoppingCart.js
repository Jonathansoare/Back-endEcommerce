const ShoppingCart = require('../../models/ShoppingCart');

async function GetShoppingCart(req, res) {
  const id = req.params.id || null;

  try {
  if(id){
    const ShoppingCartItem = await ShoppingCart.findAll({
      where:{
        userId:id
      }
    });

    if (!ShoppingCartItem) {
      return res.status(404).json({ error: 'Item do carrinho não encontrado' });
    }

    res.json(ShoppingCartItem);
  }
  else{
      const ShoppingCartItem = await ShoppingCart.findAll();
  
      if (!ShoppingCartItem) {
        return res.status(404).json({ error: 'Item do carrinho não encontrado' });
      }
  
      res.status(201).json(ShoppingCartItem);
  }

 
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao buscar o item do carrinho' });
  }
}

module.exports = {
  GetShoppingCart
}
