const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//timestame trace daate 
const UserSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
    Age: String
}, {timestamps: true})



//mongoose.model(nom du model inserre dans la base,nom de schema)
module.exports = mongoose.model('user', UserSchema)
