var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/user/profile/img', ()=>{
  fs.readFile()
});

module.exports = router;
