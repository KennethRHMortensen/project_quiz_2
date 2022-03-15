var express = require('express');
const quizController = require('../controllers/quizController');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
/* GET quiz setup page. */
router.get('/quizsetup', async function(req, res, next) {
  /*
    res.render('pages/quizsetup', { 
    title: 'Quiz setup page' });
    */
    const quiz = await quizController.getQuiz();
    res.send(quiz);
});

router.post('/quizsetup', async (req, res) => {
  const quiz = await quizController.postQuiz(req);
  res.send(quiz)
})


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


