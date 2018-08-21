 var mongoose = require('mongoose');
 const ENV = require('../../../setup/environment');

 let user= ENV.db.user;
 let pwd = ENV.db.pwd;
 let port = ENV.db.port;
 let db_name = ENV.db.name;

 var dburl = 'mongodb://'+user+':'+pwd+'@svutil12:'+port+'/'+db_name;

 // var retry = null;
 mongoose.connect(dburl, {useNewUrlParser: true, bufferCommands: true});
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error: '));
 db.once('open', function(){
    // console.log('The connection is now open');
 })

// CONNECTION EVENTS
  mongoose.connection.on('connected', function() {
    //console.log('Mongoose connected to ' + dburl);
  });
  mongoose.connection.on('error', function(err) {
    console.error('Mongoose connection error: ' + err);
  });
  mongoose.connection.on('disconnected', function() {
    console.error('Mongoose disconnected');
  });

 // CAPTURE APP TERMINATION / RESTART EVENTS
 // To be called when process is restarted or terminated
 function gracefulShutdown(msg, callback) {
   mongoose.connection.close(function() {
     console.log('Mongoose disconnected through ' + msg);
     callback();
   });
 }

 // For nodemon restarts
 process.once('SIGUSR2', function() {
   gracefulShutdown('nodemon restart', function() {
     process.kill(process.pid, 'SIGUSR2');
   });
 });
 // For app termination
 process.on('SIGINT', function() {
   gracefulShutdown('App termination (SIGINT)', function() {
     process.exit(0);
   });
 });
 // For Heroku app termination
 process.on('SIGTERM', function() {
   gracefulShutdown('App termination (SIGTERM)', function() {
     process.exit(0);
   });
 });

// BRING IN YOUR SCHEMAS & MODELS
require('../module/posts/model');
require('../module/users/model');