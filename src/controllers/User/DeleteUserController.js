const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const DeleteUser = async (req,res) => {
    try {
        const id = req.params.id;

        await User.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({messagem:'conta apagada com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({messagem: "Ocorreu um erro ao apagar a conta"})
    }
}

module.exports = {
    DeleteUser
}