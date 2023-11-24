const express = require('express');
const app = express();
const PORT = 3002;

app.get('/pedido', (req, res) => {
  // Lógica fictícia para obter informações sobre pedidos
  res.json({ pedido: 'Pedido X', status: 'Em andamento' });
});

app.get('/estoque', (req, res) => {
  // Lógica fictícia para obter informações sobre o estoque
  res.json({ produto: 'Produto A', quantidade: 100 });
});

app.listen(PORT, () => {
  console.log(`Microsserviço 2 rodando na porta ${PORT}`);
});
