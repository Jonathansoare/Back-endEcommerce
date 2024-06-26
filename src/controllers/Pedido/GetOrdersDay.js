const { sequelize } = require('../../config/dataBase');
const Pedido = require('../../models/Pedido');
const { fn, col, literal, Op } = require('sequelize');

const getDailySales = async (req, res) => {
  try {
    // Consulta para obter as vendas do dia atual
    const totalVendasHoje = await Pedido.sum('total_produto', {
      where: literal('DATE(data_pedido) = CURDATE()')
    });

    // Consulta para obter as vendas do dia anterior
    const totalVendasOntem = await Pedido.sum('total_produto', {
      where: {
        data_pedido: {
          [Op.gte]: literal('CURDATE() - INTERVAL 1 DAY'),
          [Op.lt]: literal('CURDATE()')
        }
      }
    });

    // Calcular a diferença percentual
    let diferencaPercentual = 0;
    if (totalVendasOntem !== null && totalVendasOntem !== 0) {
      diferencaPercentual = ((totalVendasHoje - totalVendasOntem) / totalVendasOntem) * 100;
    }

    return res.status(200).json({
      totalVendasHoje: totalVendasHoje || 0,
      totalVendasOntem: totalVendasOntem || 0,
      diferencaPercentual: diferencaPercentual.toFixed(2)
    });
  } catch (error) {
    console.error('Erro ao buscar vendas diárias e calcular a diferença percentual:', error);
    return res.status(500).json({ error: 'Erro ao buscar vendas diárias e calcular a diferença percentual' });
  }
};

module.exports = {
  getDailySales
};
