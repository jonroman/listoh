var express = require('express');
var router = express.Router();
var posts = require('./controller');

router
  .route('/')
  .get(posts.getAll);

router
  .route('/new')
  .post(posts.addOne);

router
  .route('/:id')
  .get(posts.getOne)
  .put(posts.updateOne)
  .delete(posts.deleteOne);

router
  .route('/:id/hard')
  .delete(posts.hardDeleteOne);

module.exports = router;