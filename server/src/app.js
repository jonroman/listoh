// DB connect to mongoose
require('../src/data/db');
const ENV = require('../environment.js');
var ActiveDirectory = require('activedirectory2');
var AD = new ActiveDirectory(ENV.activeDirectoryConfig);
const cookieSession = require('cookie-session')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({name: 'mydsti-session', keys : ['mydsti']}));

app.use(function (req, res, next) {
  username = req.headers['x-iisnode-auth_user'] || "DSTI/\JonRoman"; // refs: IIS7 web.config
  username = username.substring(5); // DSTI\JonRoman to JonRoman
  if (req.session !== undefined && req.session.username === username) {
    next()
  } else {
    /*
    * @brief findUser() Function Built in ActiveDirectory2 function for finding a user
    * @param user_name String The user name in the active directory
    * @param ADUser Object The Active Directory User
    * @return User Object
    * NOTE!! ActiveDirectory2 - altered DEFAULTS to return all
    * NOTE!! Changes made to node_module/activedirectory2/lib/activedirectory.js lines:[68,69]
    */
    AD.findUser(username, function(err, ad_user) {
      if (ad_user === undefined) {
        console.error("User is not authorized  ERROR: " + err);
        req.session = null;
      } else if (ad_user.sAMAccountName === username) {
        //console.info("AUTHORIZED : ", username);
        req.session.username = username
        next()
      } else if (err) {
        console.error("User is not authorized  ERROR: " + err);
        req.session = null;
      }
    })
  }
});

app.use(function(req, res, next){
  console.log("testing sessions ", req.session);
  next()
});

let posts = require('./module/posts/routes');
app.use('/posts', posts);

let users = require('./module/users/routes');
app.use('/users', users);

app.listen(process.env.PORT || ENV.port.server, function(){
    console.log("The Server is now running on PORT ");
})