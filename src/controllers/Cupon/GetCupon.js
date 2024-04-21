const Cupons = require('../../models/Cupon');

async function getCupon(req, res) {
    try {
        const id = req.params.id || null; // Verifica se há um parâmetro ID na solicitação

        let whereCondition = {}; // Condição de busca inicialmente vazia

        if (id) {
            whereCondition.id = id; // Se houver um ID, a busca será filtrada por esse ID
        }

        const cupons = await Cupons.findAll({
            where: whereCondition, // Aplica a condição de busca, se houver
            attributes: ['id', 'NameCupon', 'Status', 'ValorDesconto', 'DataValidade']
        });

        if (cupons.length === 0) {
            return res.status(204).json({ message: 'Nenhum cupom encontrado' });
        }

        return res.status(200).json({ cupons });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar cupons.' });
    }
}

module.exports = { getCupon };
