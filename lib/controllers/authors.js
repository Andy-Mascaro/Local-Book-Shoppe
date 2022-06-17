const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .post('/', async (req, res) => {
    const newAuth = await Author.insert(req.body);
    res.json(newAuth);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const auth = await Author.getById(id);
    res.json(auth);
  })

  .get('/', async (req, res) => {
    const authList = await Author.getAll();
    res.json(authList);
  });
