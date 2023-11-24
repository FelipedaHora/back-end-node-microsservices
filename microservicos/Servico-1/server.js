const express = require('express');
const app = express();
const PORT = 3001;

app.get('/produto', (req, res) => {
  // Lógica fictícia para obter informações sobre produtos
  res.json({ produto: 'Produto A', preco: 50.0 });
});

app.get('/cliente', (req, res) => {
  // Lógica fictícia para obter informações sobre clientes
  res.json({ cliente: 'Cliente 1', endereco: 'Rua ABC, 123' });
});

app.listen(PORT, () => {
  console.log(`Microsserviço 1 rodando na porta ${PORT}`);
});
