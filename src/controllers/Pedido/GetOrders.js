const { sequelize } = require('../../config/dataBase');
const Pedido = require('../../models/Pedido');
const { fn, col } = require('sequelize');

const getMonthlySales = async (req,res) => {
  try {
    const results = await Pedido.findAll({
      attributes: [
        [fn('YEAR', col('data_pedido')), 'ano'],
        [fn('MONTH', col('data_pedido')), 'mes'],
        [fn('ROUND', fn('SUM', col('total_produto')), 2), 'total_vendas']
      ],
      group: [
        fn('YEAR', col('data_pedido')),
        fn('MONTH', col('data_pedido'))
      ],
    });

    return res.status(200).json(results)
  } catch (error) {
    console.error('Error fetching monthly sales:', error);
    throw error;
  }
};

module.exports = {
  getMonthlySales
};
