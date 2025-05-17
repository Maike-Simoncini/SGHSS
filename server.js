const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const pacienteRoutes = require('./routes/pacienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const authRoutes = require('./routes/authRoutes');
const logRoutes = require('./routes/logRoutes');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o app
const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

// Rotas
app.use('/pacientes', pacienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/consultas', consultaRoutes);
app.use('/auth', authRoutes);
app.use('/logs', logRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});