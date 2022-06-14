const { Router } = require('express');
const Work = require('../models/Work');

module.exports = Router().get('/', async (req, res) => {
  const workList = await Work.getAll();
  res.json(workList);
});
