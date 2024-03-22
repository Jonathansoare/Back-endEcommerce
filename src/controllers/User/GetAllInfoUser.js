const User = require('../../models/User');

const getAllInfoUser = async (req,res) => {
    const userId = req.params.id;
    try {
        const usuario = await User.findByPk(userId,{
            attributes: ['id', 'email','dateOfBirth', 'name','cpf','role']
        });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }


        return res.status(200).json({
            usuario
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erro ao recuperar informações do usuário.',
            error: error.message
        });
    }
}

module.exports = {
    getAllInfoUser
}