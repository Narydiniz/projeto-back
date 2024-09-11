// Inportação das bibliotecas e frameworks 
const express = require('express'); //Cria e gerencia servidores web e APIs
const dotenv = require('dotenv'); // Gerencia variáveis de ambiente, como credenciais de banco de dados
const cors = require('cors'); // Permite que o servidor aceite diferentes origens de requisição
const bodyParser = require('body-parser'); // Analisa o corpo das requisições HTPP

// Configurando as variáveis de ambiente 
dotenv.config();

//Aplicação express armazenada na constante app
const app = express();
//Configura o cors e o body-parser
app.use(cors()); //Habilita o cors para todas as rotas
app.use(bodyParser.json()); //Habilita o body-parser para analisar as requisições Json

//Rota inicial do servidor com a rota get com a URL na raiz do projeto
app.get('/', (req,res) =>{
    res.send('Servidor rodando corretamente!')
});

//Configurando o servidor para executar na porta 5000 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});