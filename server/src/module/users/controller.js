var mongoose = require('mongoose');
var User = mongoose.model('users');

module.exports.getAll = function (req, res) {
  let query = {deleted: false};
  User.find(query, 'fname lname', function (error, users) {
    if (error) {
      console.error("ERROR: (usersGetAll) " + error);
    }
    res.send({
      users: users
    })
  }).sort({
    _id: 1
  })
};

module.exports.getOne = function (req, res) {
  let query = {objectSid: req.body.id};
  User.findOne(query, function (error, user) {
    if (error) {
      res.status(400).send("ERROR: " + error);
    }
    res.status(200).send(user);
  })
};

module.exports.addOne = function (req, res) {
  var NewUser = new User({
    fname: req.body.fname,
    lname: req.body.lname
  });

  NewUser.save(function (error) {
    if (error) {
      res.status(501);
    }
    res
    .status(200)
    .send({
      success: true,
      message: 'A User was saved successfully!'
    })
  })
};

module.exports.updateOne = function (req, res) {
  User.findById(req.params.id, 'fname lname deleted', function (error, user) {
    if (error) { console.error(error); }
      user.fname = req.body.fname;
      user.lname = req.body.lname;
      user.save(function (error) {
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
  User.findById(req.params.id, 'fname lname deleted', function (error, user) {
    if (error) { console.error(error); }
      user.deleted = true
      user.save(function (error) {
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
  User.findById(req.params.id, 'fname lname deleted', function (error, user) {
    if (error) { console.error(error); }
      user.fname = req.body.fname;
      user.lname = req.body.lname;
      user.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
};
