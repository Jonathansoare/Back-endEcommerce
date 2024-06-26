const { sequelize } = require('../../config/dataBase');
const Pedido = require('../../models/Pedido');
const { fn, col, literal } = require('sequelize');

const getHourlySales = async (req, res) => {
  try {
    const results = await Pedido.findAll({
      attributes: [
        [fn('YEAR', col('data_pedido')), 'ano'],
        [fn('MONTH', col('data_pedido')), 'mes'],
        [fn('DAY', col('data_pedido')), 'dia'],
        [fn('HOUR', col('data_pedido')), 'hora'],
        [col('total_produto'), 'vendas']
      ],
      where: literal('DATE(data_pedido) = CURDATE()'),
    });

    return res.status(200).json(results);
  } catch (error) {
    console.error('Erro ao buscar vendas diárias:', error);
    return res.status(500).json({ error: 'Erro ao buscar vendas diárias' });
  }
};

module.exports = {
  getHourlySales
};
