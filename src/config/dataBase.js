const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DBNAME || 'techshop', 
  process.env.DBUSER || 'jonathan', 
  process.env.DBPASSWORD || '90351222', {
  host: process.env.DBHOST || '127.0.0.1',
  port: process.env.DBPORT || '3306',
  dialect: 'mysql',
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Conexão bem-sucedida com o banco de dados. Rodando na porta: ${process.env.DBPORT || '3306'}`);
  } catch (error) {
    console.log(`Dados: DBNAME:${process.env.DBNAME || 'techshop'}, DBUSER:${process.env.DBUSER || 'jonathan'}, DBPASSWORD:${process.env.DBPASSWORD || '90351222'}, DBHOST:${process.env.DBHOST || '127.0.0.1'}, DBPORT:${process.env.DBPORT || '3306'}`);
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
})();

module.exports = sequelize;
