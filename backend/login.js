// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { poolPromise, sql } = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5001;

// Rota de registro
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const pool = await poolPromise;
  const result = await pool.request()
    .input('username', sql.VarChar, username)
    .input('password', sql.VarChar, hashedPassword)
    .query('INSERT INTO Users (Username, Password) VALUES (@username, @password)');

  res.status(201).send('Usuário registrado');
});

// Rota de login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const pool = await poolPromise;
  const result = await pool.request()
    .input('username', sql.VarChar, username)
    .query('SELECT * FROM Users WHERE Username = @username');

  if (result.recordset.length > 0) {
    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.Password);
    
    if (isMatch) {
      const token = jwt.sign({ id: user.Id }, 'admin', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Senha incorreta');
    }
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
