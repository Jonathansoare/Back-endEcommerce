const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Verifique se o usuário existe no banco de dados
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Verifique se a senha está correta
    const passwordMatch = await bcrypt.compare(password, usuario.password);
    if (!passwordMatch) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Usuário ou senha incorreta!'
      });
    }

    const token = jwt.sign({ id: usuario.id }, "T3J8K1C9A5N686DSCTQ97", {
      expiresIn: '999d' // 7 dias
    });

    // Retorne o token no corpo da resposta, juntamente com outros dados do usuário
    return res.status(200).json({
      token,
      name: usuario.name, // pega o nome do usuario logado
      email: usuario.email, // pega o email do usuario logado 
      id:usuario.id, // paga o id do usuario logado
      role:usuario.role, // paga o a função do usuario logado
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ error: 'Erro ao fazer login.' });
  }
}

module.exports = {
  login,
};
