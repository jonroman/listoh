var mongoose = require('mongoose');
var Post = mongoose.model('posts');

module.exports.getAll = function (req, res) {
  let query = {deleted: false};
  Post.find(query, 'title description', function (error, posts) {
    if (error) {
      console.error("ERROR: (postsGetAll) " + error);
    }
    res.send({
      posts: posts
    })
  }).sort({
    _id: 1
  })
};

module.exports.getOne = function (req, res) {
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) {
      console.error("ERROR: (postsGetOne) " + error);
    }
    res.send(post)
  })
};

module.exports.addOne = function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  console.log("body : ", req.body);

  var NewPost = new Post({
    title: title,
    description: description
  })

  NewPost.save(function (error) {
    if (error) {
      console.error("ERROR: (postsAddOne) " + error);
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
};

module.exports.updateOne = function (req, res) {
  Post.findById(req.params.id, 'title description deleted', function (error, post) {
    if (error) { console.error(error); }
      post.title = req.body.title
      post.description = req.body.description
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
};

module.exports.deleteOne = function (req, res) {
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
      post.deleted = true
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
};

module.exports.hardDeleteOne = function (req, res) {
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
      post.title = req.body.title
      post.description = req.body.description
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
};
