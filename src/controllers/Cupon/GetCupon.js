const Cupons = require('../../models/Cupon');

async function getCupon(req,res){
    try {
        const Cupom = await Cupons.findAll({
            attributes:['id','NameCupon','Status','ValorDesconto','DataValidade']
        })

        return res.status(200).json({
            Cupom
        })
    } catch (error) {
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar cupoms.' });
    }
}

module.exports = {getCupon}