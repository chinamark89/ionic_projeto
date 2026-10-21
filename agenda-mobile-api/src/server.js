// Importa a aplicação configurada em app.js
const app = require('./app');

// Define a porta do servidor
const PORT = 3000;

// Inicializa o servidor HTTP
app.listen(PORT, () => {
  console.log(`API em execucao: http://localhost:${PORT}`);
});
