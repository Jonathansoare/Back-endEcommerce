const Brands = require("../../models/Brands")

async function EditBrands(req,res){
    const id = req.params;
    const {nameBrand,imageBrand} = req.body;

    try {
        const brand = await Brands.findByPk(id.id);
        if(!brand){
            return res.status(404).json({Error:"Marca nao encontrada"})
        }

        const updatedFields = {}
        if(nameBrand){
            updatedFields.nameBrand = nameBrand
        }
        if(imageBrand){
            updatedFields.imageBrand = imageBrand
        }

        await brand.update(updatedFields)
        res.json({ message: 'Marca atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a marca' });
    }
}

module.exports = {EditBrands}