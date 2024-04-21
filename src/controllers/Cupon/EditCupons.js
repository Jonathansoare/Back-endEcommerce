const Cupons = require('../../models/Cupon');
const Log = require("../../models/Log");

async function EditCupons(req,res){
    const {id} = req.params
    console.log(id);
    const {NameCupon,Status,ValorDesconto,DataValidade,userId} = req.body;

    try {
        const cupom = await Cupons.findByPk(id)

        if(!cupom){
            return res.status(404).json({error:'Cupom não encontrado'})
        }

        const updateFields = {};
        if(NameCupon){
            updateFields.NameCupon = NameCupon
        }
        if(Status){
            updateFields.Status = Status
        }
        if(ValorDesconto){
            updateFields.ValorDesconto = ValorDesconto
        }
        if(DataValidade){
            updateFields.DataValidade = DataValidade
        }

        await cupom.update(updateFields)

        const log = await Log.create({
            msg:`O Usuario ${userId} Editou o cupom ${id}`,
            userId,
            changedItemId:id,
            actionPerformed:"UPDATE"
        })

        return res.status(200).json({
            msg:`Cupom ${id} editado com sucesso!`
        })
    } catch (error) {
        console.error("Erro ao editar o cupom:",id,error);
        return res.status(500).json({error: 'Erro ao editar cupom'})
    }
}

module.exports = {EditCupons}