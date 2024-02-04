require('./db/mongoose')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

const routerUsers = require('./routes/users.route')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log('DB CONNECTED'))
// .catch(err=>console.log(err.message))
//path principale et dans users.routes tous les routes
app.use('/api', routerUsers)
const port = 3700
app.listen(port, () => {
    console.log(`connected on ${port}`);
})

module.exports = app;
