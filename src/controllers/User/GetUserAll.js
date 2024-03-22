const User = require('../../models/User');

async function getUserAll(req,res){
    try {
        const usuario = await User.findAll({
            attributes: ['id', 'email','dateOfBirth', 'name','cpf','role'] // Selecionando os campos desejados
        });

        return res.status(200).json({
            usuario
          });
    } catch (error) {
        throw error;
    }
    };
module.exports = {
    getUserAll
}