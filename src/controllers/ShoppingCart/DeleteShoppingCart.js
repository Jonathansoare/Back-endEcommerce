const ShoppingCart = require('../../models/ShoppingCart');

const DeleteShoppingCart = async (req,res) => {
    try {
        const id = req.params;

        await ShoppingCart.destroy({
            where:{
                id:id.id
            }
        })
        res.status(200).json({messagem:'Produto do carrinho apagado com sucesso!'})
    } catch (error) {
        res.status(500).json({messagem: "Ocorreu um erro ao apagar o produto do carrinho"})
    }
}

module.exports = {
    DeleteShoppingCart
}