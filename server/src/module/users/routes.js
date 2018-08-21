var express = require('express');
var router = express.Router();
var users = require('./controller');

router
  .route('/')
  .get(users.getAll);

router
  .route('/new')
  .post(users.addOne);

router
  .route('/:id')
  .get(users.getOne)
  .put(users.updateOne)
  .delete(users.deleteOne);

router
  .route('/:id/hard')
  .delete(users.hardDeleteOne);

module.exports = router;
