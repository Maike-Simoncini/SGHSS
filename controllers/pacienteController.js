const Paciente = require('../models/Paciente');
const bcrypt = require('bcryptjs');

exports.cadastrarPaciente = async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoPaciente = await Paciente.create({
      nome,
      cpf,
      email,
      senha: senhaCriptografada,
    });
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar paciente' });
  }
};

exports.listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pacientes' });
  }
};