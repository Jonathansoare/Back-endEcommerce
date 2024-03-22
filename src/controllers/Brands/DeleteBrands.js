const Brands = require("../../models/Brands")

async function DeleteBrand(req,res){
    try {
        const id = req.params;

        await Brands.destroy({
            where:{
                BrandId:id.id
            }
        })
        res.status(200).json({messagem:'Marca apagada com sucesso!'})
    } catch (error) {
        res.status(500).json({messagem: "Ocorreu um erro ao apagar a marca"})
    }
}

module.exports = {DeleteBrand}