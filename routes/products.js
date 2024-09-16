const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador que será usado para definie as rotas 
const productsController = require('../controllers/productsController.js'); // Importa o controlador de transações (productsController)
const authMiddleware = require('../middleware/authMiddleware.js') // Importa o middleware de autenticação 


// Definindo uma rota para obter todas as transações 
router.get('/', authMiddleware, productsController.getAllProducts); 

// Definindo uma rota para adicionar uma nova transação 
router.post('/', authMiddleware, productsController.addProducts); 

//Rota para a atualização completa do produto 
router.put('/:id',  authMiddleware,productsController.updateProductsPut);

//Rota para a atualização parcial do produto
router.patch('/:id',  authMiddleware, productsController.updateProductsPatch); 

//Rota para deletar um produto 
router.delete('/:id',  authMiddleware, productsController.deleteProducts);


// Exportando o roteador 
module.exports = router