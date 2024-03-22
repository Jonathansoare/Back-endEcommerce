const Categories = require("../../models/Categories")

async function DeleteCategorie(req,res){
    try {
        const id = req.params;

        await Categories.destroy({
            where:{
                id:id.id
            }
        })
        res.status(200).json({messagem:'Marca apagada com sucesso!'})
    } catch (error) {
        res.status(500).json({messagem: "Ocorreu um erro ao apagar a marca"})
    }
}

module.exports = {DeleteCategorie}