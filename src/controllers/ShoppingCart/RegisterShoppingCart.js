const ShoppingCart = require("../../models/ShoppingCart")

async function RegisterShoppingCart(req,res){
    const {productId,userId,amount} = req.body
    try {
        const createShoppingCart = await ShoppingCart.create({
            productId,
            userId,
            amount
        })

        return res.status(201).json({
            id: createShoppingCart.id,
            productId: createShoppingCart.productId,
            userId: createShoppingCart.userId,
            amount: createShoppingCart.amount,
        });
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        return res.status(500).json({ error: 'Erro ao adiciona produtoi ao carrinho.' });
    }
}

module.exports = {RegisterShoppingCart}