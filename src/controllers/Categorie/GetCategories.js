const Categories = require("../../models/Categories")

async function getCategorie(req,res){
    try {
        const categorie = await Categories.findAll({
            attributes:['id','nameType','type','iconType']
        })

        return res.status(200).json({
            categorie
        })
    } catch (error) {
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar marcas.' });
    }
}

module.exports = {getCategorie}