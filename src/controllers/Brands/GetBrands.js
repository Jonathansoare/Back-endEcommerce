const Brands = require("../../models/Brands");

async function getBrand(req, res) {
    try {
        // Verificar se foi fornecido um ID na solicitação
        const { id } = req.params;

        if (id) {
            // Se um ID foi fornecido, buscar apenas a marca correspondente
            const brand = await Brands.findOne({
                where: {
                    BrandId: id
                },
                attributes: ['BrandId', 'nameBrand', 'imageBrand']
            });

            if (!brand) {
                return res.status(404).json({ message: 'Marca não encontrada.' });
            }

            return res.status(200).json({ brand });
        } else {
            // Se nenhum ID foi fornecido, buscar todas as marcas
            const brands = await Brands.findAll({
                attributes: ['BrandId', 'nameBrand', 'imageBrand']
            });

            return res.status(200).json({ brands });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar marcas.' });
    }
}

module.exports = { getBrand };
