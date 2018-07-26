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
// Modules
let posts = require('./module/posts/routes');
app.use('/posts', posts);

const ENV = require('../../setup/environment');
app.listen(ENV.port.server, function(){
    console.log("The Server is now running on PORT " + ENV.port.server);
})
