const Log = require("../../models/Log");

async function GetLogs(req,res){
    try {
        const Logs = await Log.findAll({
            attributes:['id','msg','userId','changedItemId','actionPerformed','createdAt']
        })
        if(Logs.length === 0){
            return res.status(204).json({ message: 'Nenhum Log encontrado' });
        }

        return res.status(200).json({Logs})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar Log' });
    }
}

module.exports ={ GetLogs}