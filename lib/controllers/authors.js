const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const auth = await Author.getById(id);
    res.json(auth);
  })

  .get('/', async (req, res) => {
    const authList = await Author.getAll();
    res.json(authList);
  });
