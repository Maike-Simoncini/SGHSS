const express = require('express');
const router = express.Router();
const profissionalController = require('../controllers/profissionalController');

router.post('/', profissionalController.cadastrarProfissional);
router.get('/', profissionalController.listarProfissionais);

module.exports = router;