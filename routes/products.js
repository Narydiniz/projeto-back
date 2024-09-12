const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador que será usado para definie as rotas 
const productsController = require('../controllers/productsController.js'); // Importa o controlador de transações (productsController)

// Definindo uma rota para obter todas as transações 
router.get('/', productsController.getAllProducts); 

// Definindo uma rota para adicionar uma nova transação 
router.post('/', productsController.addProducts); 

//Rota para a atualização completa do produto 
router.put('/:id',productsController.updateProductsPut);

//Rota para a atualização parcial do produto
router.patch('/:id',productsController.updateProductsPatch); 

//Rota para deletar um produto 
router.delete('/:id',productsController.deleteProducts);


// Exportando o roteador 
module.exports = router