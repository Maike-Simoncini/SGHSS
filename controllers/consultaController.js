const Consulta = require('../models/Consulta');

exports.agendarConsulta = async (req, res) => {
  const { paciente_id, profissional_id, data_hora } = req.body;

  try {
    const novaConsulta = await Consulta.create({
      paciente_id,
      profissional_id,
      data_hora,
      status: 'Agendada',
    });
    res.status(201).json(novaConsulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao agendar consulta' });
  }
};

exports.listarConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll();
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar consultas' });
  }
};