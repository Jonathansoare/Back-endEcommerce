const Cupons = require('../../models/Cupon');

async function RegisterCupon(req,res){
    const {NameCupon,Status,ValorDesconto,DataValidade} = req.body;

    try {
        const createCupon = await Cupons.create({
            NameCupon,
            Status,
            ValorDesconto,
            DataValidade
        })

        return res.status(201).json({
            createCupon,
            msg:"Cupom adicionado com sucesso!"
        })

    } catch (error) {
        console.error("Erro ao cadastrar Cupom", error)
        return res.status(500).json({ error: 'Erro ao cadastrar cupom.' });
    }
}

module.exports = {
    RegisterCupon
}