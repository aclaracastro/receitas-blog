const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const uri = 'mongodb://localhost:27017/seu_banco_de_dados';

mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro:', err));

// Definição do Schema e Modelo...

app.get('/receitas', async (req, res) => {
  // Busca no banco de dados...
});

// Outras rotas e funcionalidades...

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});