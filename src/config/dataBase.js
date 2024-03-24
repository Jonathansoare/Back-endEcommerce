const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'mysql',
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');
  } catch (error) {
    console.log(`dados: DBNAME:${process.env.DBNAME}, DBUSER:${process.env.DBUSER}, DBPASSWORD:${process.env.DBPASSWORD},DBHOST:${process.env.DBHOST}`)
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
})();

module.exports = sequelize;
