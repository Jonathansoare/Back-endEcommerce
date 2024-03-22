const Categories = require("../../models/Categories")

async function EditCategorie(req,res){
    const id = req.params;
    const {nameType,type,iconType} = req.body;

    try {
        const categorie = await Categories.findByPk(id.id);
        if(!categorie){
            return res.status(404).json({Error:"Marca nao encontrada"})
        }

        const updatedFields = {}
        if(nameType){
            updatedFields.nameType = nameType
        }
        if(type){
            updatedFields.type = type
        }
        if(iconType){
            updatedFields.iconType = iconType
        }

        await Categories.update(updatedFields)
        res.json({ message: 'Marca atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a marca' });
    }
}

module.exports = {EditCategorie}