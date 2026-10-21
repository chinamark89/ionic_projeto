// Importação dos módulos principais
const express = require('express');
const cors = require('cors');

// Inicializa a aplicação Express
const app = express();

// Middlewares globais: liberação de acesso (CORS) e leitura de JSON no corpo das requisições
app.use(cors());
app.use(express.json());

// Rota de verificação de saúde da API (Health Check)
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Exporta a instância do app
module.exports = app;
