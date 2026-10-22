const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dados simulados de produtos
const produtos = [
  { id: 1, nome: 'Smartphone Android', preco: 1500.00, categoria: 'Eletrônicos' },
  { id: 2, nome: 'Fone de Ouvido Bluetooth', preco: 250.00, categoria: 'Acessórios' },
  { id: 3, nome: 'Carregador Rápido USB-C', preco: 120.00, categoria: 'Acessórios' }
];

// Rota de Health Check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Nova rota GET /produtos
app.get('/produtos', (_req, res) => {
  res.status(200).json(produtos);
});

module.exports = app;