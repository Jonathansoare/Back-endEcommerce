const Products = require('../../models/Products');

const DeleteProducts = async (req,res) => {
    try {
        const id = req.params;

        await Products.destroy({
            where:{
                id:id.id
            }
        })
        res.status(200).json({messagem:'Produto apagado com sucesso!'})
    } catch (error) {
        res.status(500).json({messagem: "Ocorreu um erro ao apagar o produto"})
    }
}

module.exports = {
    DeleteProducts
}