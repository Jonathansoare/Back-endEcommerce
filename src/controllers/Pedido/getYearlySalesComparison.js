const { sequelize } = require('../../config/dataBase');
const Pedido = require('../../models/Pedido');
const { fn, col, literal, Op, where } = require('sequelize');

const getYearlySalesComparison = async (req, res) => {
  try {
    // Consulta para obter as vendas do ano atual
    const totalVendasAnoAtual = await Pedido.sum('total_produto', {
      where: where(fn('YEAR', col('data_pedido')), fn('YEAR', literal('CURDATE()')))
    });

    // Consulta para obter as vendas do ano anterior
    const totalVendasAnoAnterior = await Pedido.sum('total_produto', {
      where: where(fn('YEAR', col('data_pedido')), fn('YEAR', literal('CURDATE() - INTERVAL 1 YEAR')))
    });

    // Calcular a diferença percentual
    let diferencaPercentual = 0;
    if (totalVendasAnoAnterior !== null && totalVendasAnoAnterior !== 0) {
      diferencaPercentual = ((totalVendasAnoAtual - totalVendasAnoAnterior) / totalVendasAnoAnterior) * 100;
    }

    return res.status(200).json({
      totalVendasAnoAtual: totalVendasAnoAtual || 0,
      totalVendasAnoAnterior: totalVendasAnoAnterior || 0,
      diferencaPercentual: diferencaPercentual.toFixed(2)
    });
  } catch (error) {
    console.error('Erro ao buscar vendas anuais e calcular a diferença percentual:', error);
    return res.status(500).json({ error: 'Erro ao buscar vendas anuais e calcular a diferença percentual' });
  }
};

module.exports = {
  getYearlySalesComparison
};
