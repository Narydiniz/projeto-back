const dotenv = require('dotenv');  // Importa o pacote dotenv para gerenciar variáveis de ambiente 

dotenv.config(); // Carrega as variáveis definidas no arquivo .env para process.env

const express = require('express'); // Importa o framework Express 

const cors = require('cors');  //Importa o pacote cors para permitir requisições de diferentes origens 
const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db.js'); // Importa a conexão com o banco de dados

const productsRouters = require('./routes/products.js'); // Importa as rotas de produtos

const app = express(); // Inicializa uma nova aplicação Express 

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON
app.use('/api/products',productsRouters); // Usar as rotas de transações para todas as requisições que começam com /api/transactions


//Rota inicial para testar o servidor 

app.get('/', (req,res) => {
    res.send('Servidor está funcionando');
});

// Define a porta a par r da variável de ambiente ou usa a porta 3000 como padrão

const PORT = process.env.Port || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor esta rodando na PORTA ${PORT}`);
});