const LogAuditoria = require('../models/LogAuditoria');

exports.registrarAcao = async (req, res) => {
  const { usuario_id, acao } = req.body;

  try {
    const novoLog = await LogAuditoria.create({
      usuario_id,
      acao,
      data_hora: new Date(),
    });
    res.status(201).json(novoLog);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar log' });
  }
};