const Cupons = require('../../models/Cupon');
const Log = require("../../models/Log");

const DeleteCupon = async (req,res) => {
    try {
        const id = req.params
        

        await Cupons.destroy({
            where:{
                id:id.id
            }
        })
        res.status(200).json({messagem:'cupom apagado com sucesso!'})
    } catch (error) {
        res.status(500).json({messagem: "Ocorreu um erro ao apagar o cupom"})
    }
}

module.exports = {
    DeleteCupon
}