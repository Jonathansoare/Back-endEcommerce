const { sequelize } = require('../../config/dataBase'); // Configure conforme necessário
const Pedido = require('../../models/Pedido'); // Ajuste o caminho do modelo conforme necessário
const { Op, fn, col, where } = require('sequelize');

const getMonthlyComparison = async (req, res) => {
  try {
    // Obter data atual para comparação
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Mês é base 0, por isso somamos 1

    // Consulta para obter as vendas do mês atual
    const vendaMesAtual = await Pedido.sum('total_produto', {
      where: {
        [Op.and]: [
          where(fn('YEAR', col('data_pedido')), currentYear),
          where(fn('MONTH', col('data_pedido')), currentMonth)
        ]
      }
    });

    // Consulta para obter as vendas do mês anterior
    const lastMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    
    const vendaMesAnterior = await Pedido.sum('total_produto', {
      where: {
        [Op.and]: [
          where(fn('YEAR', col('data_pedido')), lastMonthYear),
          where(fn('MONTH', col('data_pedido')), lastMonth)
        ]
      }
    });

    // Calcular a diferença percentual
    let diferencaPercentual = 0;
    if (vendaMesAnterior !== null && vendaMesAnterior !== 0) {
      diferencaPercentual = ((vendaMesAtual - vendaMesAnterior) / vendaMesAnterior) * 100;
    }

    return res.status(200).json({
      vendaMesAtual: vendaMesAtual || 0,
      vendaMesAnterior: vendaMesAnterior || 0,
      diferencaPercentual: diferencaPercentual.toFixed(2)
    });
  } catch (error) {
    console.error('Erro ao buscar vendas e calcular a diferença percentual:', error);
    return res.status(500).json({ error: 'Erro ao buscar vendas e calcular a diferença percentual' });
  }
};

module.exports = {
  getMonthlyComparison
};
