const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router().get('/', async (req, res) => {
  const authList = await Author.getAll();
  res.json(authList);
});
