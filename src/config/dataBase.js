const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DBNAME || 'techshop', 
  process.env.DBUSER || 'root', 
  process.env.DBPASSWORD || '90351222', {
  host: process.env.DBHOST || '127.0.0.1',
  port:process.env.DBPORT || '3306',
  dialect: 'mysql',
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Conexão bem-sucedida com o banco de dados.  rondando na porta: ${host}`);
  } catch (error) {
    console.log(`dados: DBNAME:${process.env.DBNAME}, DBUSER:${process.env.DBUSER}, DBPASSWORD:${process.env.DBPASSWORD},DBHOST:${process.env.DBHOST}, DBPORT:${process.env.DBPORT}`)
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
})();

module.exports = sequelize;
