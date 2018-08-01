// DB connect to mongoose
require('../src/data/db');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// !IMPORTANT: Routes must be defined before body parser
// Active Directory Security MiddleWare

/*
 * @brief This is a self invoking function which handles Active Directory Security
 * on ALL application routes. It is telling the express app to very that the AD user
 * is valid and this function is ran before any request is made to the server.
 * TODO: Use SESSIONS to handle the user single sign on and AD permission.
 */
(function getUserCredentials() {
  User = require('../src/_activedirectory');
  if (Object.keys(User).length === 0 && User.constructor === Object) {
    app.use(function(req, res, next){
      if (Object.keys(User).length === 0 && User.constructor === Object) {
        return false;
      } else {
        next();
      }
    });
  }
}());

// Modules
let posts = require('./module/posts/routes');
app.use('/posts', posts);

const ENV = require('../../setup/environment');
app.listen(ENV.port.server, function(){
    console.log("The Server is now running on PORT " + ENV.port.server);
})
