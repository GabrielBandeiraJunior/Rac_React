const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuração do MongoDB
mongoose.connect('mongodb://localhost:27017/RacsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('RACS Conectado ao banco de dados MongoDB');
});

const UserSchema = new mongoose.Schema({
  tecnico: {
    type: String,
    required: true,
    unique: false,
  },
  razaoSocial: {
    type: String,
    required: false,
  },
  cnpj: {
    type: String,
    required: true,
    unique: false,
  },
  endereco: {
    type: String,
    required: true,
    unique: false,
  },
  numero: {
    type: String,
    required: true,
  },
  responsavel: {
    type: String,
    required: true,
    unique: false,
  },
  setor: {
    type: String,
    required: true,
    unique: false,
  },
  
  cidade: {
    type: String,
    required: true,
    unique: false,
  },
  horaInicio: {
    type: String,
    required: true,
    unique: false,
  },
  horaTermino: {
    type: String,
    required: true,
    unique: false,
  },
  instalacaoDeEquipamentos: {
    type: Boolean,
    required: false,
  },
  manutencaoDeEquipamentos: {
    type: Boolean,
    required: false,
  },
  customizacao: {
    type: Boolean,
    required: false,
  },
  diagnosticoDeProjetos: {
    type: Boolean,
    required: false,
  },
  homologacaoDeInfra: {
    type: Boolean,
    required: false,
  },
  deslocamento: {
    type: Boolean,
    required: false,
  },
  treinamentoOperacional: {
    type: Boolean,
    required: false,
  },
  implantacaoDeSistemas: {
    type: Boolean,
    required: false,
  },
  manutencaoPreventivaContratual: {
    type: Boolean,
    required: false,
  },
  repprintpoint: {
    type: Boolean,
    required: false,
  },
  repminiprint: {
    type: Boolean,
    required: false,
  },
  repsmart: {
    type: Boolean,
    required: false,
  },
  relogiomicropoint: {
    type: Boolean,
    required: false,
  },
  relogiobiopoint: {
    type: Boolean,
    required: false,
  },
  catracamicropoint: {
    type: Boolean,
    required: false,
  },
  catracabiopoint: {
    type: Boolean,
    required: false,
  },
  suporteTi: {
    type: Boolean,
    required: false,
  },
  outros: {
    type: String,
    required: false,
  },
  nSerie: {
    type: String,
    required: false,
  },
  localInstalacao: {
    type: String,
    required: false,
  },
  observacaoProblemas: {
    type: String,
    required: false,
  },
  componente: {
    type: String,
    required: false,
  },
  codigoComponente: {
    type: String,
    required: false,
  },
  valorVisita: {
    type: String,
    required: false,
  },
  valorrs: {
    type: String,
    required: false,
  },
  valorPecas: {
    type: String,
    required: false,
  },
  valorTotal: {
    type: String,
    required: false,
  },
  observacoes: {
    type: String,
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

app.post("/racvirtual/register", async (req, resp) => {
  try {
    console.log(req.body); // Para verificar os dados recebidos
    const user = new User(req.body);
    let result = await user.save();
    if (result) {
      resp.status(200).json({ message: "Data saved successfully", data: result });
    } else {
      resp.status(400).json({ message: "Failed to save data" });
    }
  } catch (e) {
    resp.status(500).json({ message: "Internal server error" });
    console.error("Erro ao salvar usuário:", e);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});