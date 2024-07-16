// db.js
const sql = require('mssql');

const config = {
  user: 'DESKTOP-7JL3VHH\crachas',
  password: '',
  server: 'localhost\\SQLEXPRESS',
  port: 1433,
  database: 'RAC',
  options: {
    encrypt: true, // Para Azure
    trustServerCertificate: true, // Para desenvolvimento local
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conectado ao SQL Server');
    return pool;
  })
  .catch(err => console.error('Erro na conexão:', err));

module.exports = {
  sql,
  poolPromise,
};
