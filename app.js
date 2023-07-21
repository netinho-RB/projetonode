const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  // Middleware para calcular o ano atual
  res.locals.currentYear = new Date().getFullYear();
  next();
});

app.get('/', (req, res) => {
  const pageTitle = 'Meu Site - Início';
  const siteTitle = 'NetoCode';
  res.render('index', { pageTitle, siteTitle });
});

// Restante das rotas...

app.listen(port, () => {
  console.log(`Servidor Express em execução na porta ${port}`);
});
