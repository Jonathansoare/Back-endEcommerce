const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/User');

async function cadastrar(req, res) {
  const { name, email, password,role,dateOfBirth} = req.body;

  // Verifique se o email já está cadastrado
  const usuarioExistente = await Usuario.findOne({ where: { email } });
  if (usuarioExistente) {
    return res.status(401).json({ error: 'Email já cadastrado.' });
  }

  // Criptografe a senha antes de armazenar no banco de dados
  const hashSenha = await bcrypt.hash(password, 8);

  try {
    const novoUsuario = await Usuario.create({
      name,
      email,
      dateOfBirth:dateOfBirth || null,
      role:role || "client",
      password: hashSenha,
      role:role || null
    });

     // Crie um token JWT para o usuário cadastrado
     const token = jwt.sign({ id: novoUsuario.id,role:novoUsuario.role }, 'sua_chave_secreta', {
      expiresIn: '99d', // Defina o tempo de expiração do token como desejar
    })

    // Agora, além de retornar o novo usuário criado, retorne também o ID do usuário.
    return res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      role:novoUsuario.role,
      token
    });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
}

module.exports = {
  cadastrar,
};
