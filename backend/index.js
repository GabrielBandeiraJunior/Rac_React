const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuração do MongoDB
mongoose.connect('mongodb://localhost:27017/testereactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao banco de dados MongoDB');
});

// Definição do Schema
const UserSchema = new mongoose.Schema({
  razaoSocial: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
    unique: true,
  },
  endereco: {
    type: String,
    required: true,
    unique: true,
  },
  numero:{
    type: String,
    requires: false
  },
  responsavel: {
    type: String,
    required: true,
    unique: true,
  },
  setor: {
    type: String,
    required: true,
    unique: true,
  },
  tecnico: {
    type: String,
    required: true,
    unique: true,
  },
  cidade: {
    type: String,
    required: true,
    unique: true,
  },
  horaInicio: {
    type: String,
    required: true,
    unique: true,
  },
  horaTermino: {
    type: String,
    required: true,
    unique: true,
  },
  instalacaoDeEquipamentos: {
    type: Boolean,
    required: false,
  },
  manutencaoDeEquipamentos: {
    type: Boolean,
    required: false,
  },
  manutencaoPreventivaContratual: {
    type: Boolean,
    required: false,
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Tabela-racs', UserSchema);

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
  try {
    console.log(req.body); // Para verificar os dados recebidos
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Usuário já registrado");
    }
  } catch (e) {
    resp.status(500).send("Algo deu errado");
    console.error("Erro ao salvar usuário:", e);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
