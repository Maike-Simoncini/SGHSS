const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Paciente = require('../models/Paciente');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const paciente = await Paciente.findOne({ where: { email } });
    if (!paciente) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const isSenhaValida = await bcrypt.compare(senha, paciente.senha);
    if (!isSenhaValida) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: paciente.id, email: paciente.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
};