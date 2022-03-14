var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
/* GET quiz setup page. */
router.get('/quizsetup', function(req, res, next) {
  res.render('pages/quizsetup', { 
    title: 'Quiz setup page' });
});
/* GET test quiz page. */
router.get('/quiztest', function(req, res, next) {
  res.render('pages/quiztest', { 
    title: 'Quiz testing page' });
});
/* GET quiz game page. */
router.get('/quiz', function(req, res, next) {
  res.render('pages/quiz', { 
    title: 'Welcome to quiz game' });
});

module.exports = router;


