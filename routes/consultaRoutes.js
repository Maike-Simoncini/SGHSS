const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.post('/', consultaController.agendarConsulta);
router.get('/', consultaController.listarConsultas);

module.exports = router;