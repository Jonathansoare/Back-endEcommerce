const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../../models/User');

async function validarUsuarioPeloToken(req, res) {
  const authHeader = req.headers.authorization;

  try {
    console.log(authHeader);
    if (!authHeader) {
      return res.status(400).json({
        valido: false,
        mensagem: 'Erro: Token não enviado',
      });
    }

    const [, token] = authHeader.split(' ');
    const decodedToken = await promisify(jwt.verify)(token, "T3J8K1C9A5N686DSCTQ97");

    const userId = decodedToken.id;

    const usuario = await User.findByPk(userId);

    if (!usuario) {
      return res.status(400).json({
        valido: false,
        mensagem: 'Usuário não encontrado no banco de dados',
      });
    }

    return res.status(200).json({
      valido: true,
      mensagem: 'Usuário válido',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      valido: false,
      mensagem: 'Token inválido ou expirado',
    });
  }
}

module.exports = { validarUsuarioPeloToken };
