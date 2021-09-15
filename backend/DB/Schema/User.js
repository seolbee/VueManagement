const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
    'email' : {type:String, required: true},
    'id' : {type:String, required: true},
    'name' : {type:String, required:true},
    'password' : {type:String, required:true}
    },
    {
        timestamps : true
    },
    {
        collection : 'users'
    }
);

module.exports = {
    User : model('user', UserSchema)
}