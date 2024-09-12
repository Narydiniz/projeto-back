const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const productsController = require('../controllers/productsController'); // Importa o controlador de transações 
// Definindo uma rota para obter todas as transações 
router.get('/', productsController.getAllproducts); 
// Exportando o roteador 
module.exports = router;