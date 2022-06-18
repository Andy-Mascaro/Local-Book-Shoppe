const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/authors', require('./controllers/authors'));
app.use('/books', require('./controllers/books'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
