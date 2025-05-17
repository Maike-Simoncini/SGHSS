const Profissional = require('../models/Profissional');
const bcrypt = require('bcryptjs');

exports.cadastrarProfissional = async (req, res) => {
  const { nome, especialidade, crm, email, senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoProfissional = await Profissional.create({
      nome,
      especialidade,
      crm,
      email,
      senha: senhaCriptografada,
    });
    res.status(201).json(novoProfissional);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar profissional' });
  }
};

exports.listarProfissionais = async (req, res) => {
  try {
    const profissionais = await Profissional.findAll();
    res.status(200).json(profissionais);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar profissionais' });
  }
};