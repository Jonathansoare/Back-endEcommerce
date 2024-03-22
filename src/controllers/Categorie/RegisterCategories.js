const Categories = require("../../models/Categories")

async function RegisterCategorie(req,res){
    const {nameType,type,iconType} = req.body;

    try {
        const createCategorie = await Categories.create({
            nameType,
            type,
            iconType
        })

        return res.status(201).json({
            BrandId:createCategorie.id,
            nameType:createCategorie.nameType,
            type:createCategorie.type,
            iconType:createCategorie.iconType
        })
    } catch (error) {
        console.error('Erro ao cadastrar marca:', error);
        return res.status(500).json({ error: 'Erro ao cadastrar marca.' });
    }
}

module.exports = {
    RegisterCategorie
}