const express = require('express');
const app = express();
const PORT = 3000;

const produtoController = require('../Servico-1/produtoController');
const clienteController = require('../Servico-1/clienteController');
const pedidoController = require('../Servico-2/pedidoController');
const estoqueController = require('../Servico-2/estoqueController');

// Roteamento para Microsserviço 1
app.get('/servico-1/produto', (req, res) => {
  const produto = produtoController.obterProduto();
  res.json(produto);
});

app.get('/servico-1/cliente', (req, res) => {
  const cliente = clienteController.obterCliente();
  res.json(cliente);
});

// Roteamento para Microsserviço 2
app.get('/servico-2/pedido', (req, res) => {
  const pedido = pedidoController.obterPedido();
  res.json(pedido);
});

app.get('/servico-2/estoque', (req, res) => {
  const estoque = estoqueController.obterEstoque();
  res.json(estoque);
});

app.listen(PORT, () => {
  console.log(`Gateway rodando na porta ${PORT}`);
});
