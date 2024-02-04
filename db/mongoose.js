const mongoose = require('mongoose')


const Mongo_url = "mongodb://127.0.0.1:27017/tesdb"

// connection database
mongoose.connect(Mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection succesfully')
}).catch(err => {
    console.log('failed connection', err)
})