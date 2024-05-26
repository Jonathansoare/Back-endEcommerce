const Categories = require("../../models/Categories");

async function EditCategorie(req, res) {
    const id = req.params.id;
    const { nameType, type, iconType } = req.body;

    try {
        const categorie = await Categories.findByPk(id);
        if (!categorie) {
            return res.status(404).json({ Error: "Categoria não encontrada" });
        }

        const updatedFields = {};
        if (nameType) {
            updatedFields.nameType = nameType;
        }
        if (type) {
            updatedFields.type = type;
        }
        if (iconType) {
            updatedFields.iconType = iconType;
        }

        await Categories.update(updatedFields, { where: { id } });
        res.json({ message: 'Categoria atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a categoria', details: error.message });
    }
}

module.exports = { EditCategorie };
