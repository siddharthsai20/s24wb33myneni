var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  // Retrieve query parameters
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
 
  //res.render('grid', { title: 'Grid Display', query: query });
  res.render('grid', { title: 'Make a Grid', query: query });
 
});
 
module.exports = router;