const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

async function EditUser(req, res) {
  const id = req.params.id;
  const { name, email, phoneNumber, dateOfBirth,cpf,role } = req.body;

  try {
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Crie um objeto para armazenar os campos a serem atualizados
    const updatedFields = {};
    if (name) {
      updatedFields.name = name;
    }
    if (email) {
      updatedFields.email = email;
    }
    //if (phoneNumber) {
    //  updatedFields.phoneNumber = phoneNumber;
    //}
    if (dateOfBirth) {
      updatedFields.dateOfBirth = dateOfBirth;
    }
    if (cpf) {
      updatedFields.cpf = cpf;
    }
    if (role) {
      updatedFields.role = role;
    }
    
    await usuario.update(updatedFields);
    res.json({ message: 'Dados atualizados com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar os dados:', error);
    res.status(500).json({ error: 'Erro ao atualizar os dados' });
  }
}

module.exports = {
  EditUser
}