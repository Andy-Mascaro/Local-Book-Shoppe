const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .post('/', async (req, res) => {
    const newBook = await Book.insert(req.body);
    res.json(newBook);
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const book = await Book.getById(id);
    res.json(book);
  })

  .get('/', async (req, res) => {
    const bookList = await Book.getAll();
    res.json(bookList);
  });
