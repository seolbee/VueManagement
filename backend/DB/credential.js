const {username, password} = require('./secret');
const url = `mongodb+srv://${username}:${password}@money.apwfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    dbname : "DP"
}

module.exports = {
    url, options
}