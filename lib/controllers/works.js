const { Router } = require('express');
const Work = require('../models/Work');

module.exports = Router().post('/', async (req, res) => {
  const workList = await Work.insert(req.body);
  res.json(workList);
});
