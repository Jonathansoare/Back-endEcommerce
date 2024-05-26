const Categories = require("../../models/Categories")

async function getCategorie(req,res){
    try {
        const id = req.params.id || null; // Verifica se há um parâmetro ID na solicitação
        let whereCondition = {}; // Condição de busca inicialmente vazia

        if (id) {
            whereCondition.id = id; // Se houver um ID, a busca será filtrada por esse ID
        }

        const categorie = await Categories.findAll({
            where:whereCondition,
            attributes:['id','nameType','type','iconType']
        })

        if (categorie.length === 0) {
            return res.status(204).json({ message: 'Nenhuma categoria encontrada' });
        }

        return res.status(200).json({categorie})
    } catch (error) {
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar marcas.' });
    }
}

module.exports = {getCategorie}