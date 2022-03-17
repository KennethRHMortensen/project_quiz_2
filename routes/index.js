var express = require('express');
const quizController = require('../controllers/quizController');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

/* GET create quiz page. */
router.get('/createQuiz', async function(req, res, next) {
    res.render('pages/createQuiz', { 
    title: 'Quiz setup page' });
});

/* GET create question page. */
router.get('/createQuestion', async function(req, res, next) {
    const quiz = await quizController.getQuiz();
    res.render('pages/createQuestion', { 
    title: 'Quiz question setup page',
    quiz: quiz ? quiz : null });
});

/* GET create answer page. */
router.get('/createAnswer', async function(req, res, next) {
  const question = await quizController.getQuizQuestion();
  res.render('pages/createAnswer', { 
    title: 'Quiz question setup page',
    question: question });
});

/* GET test quiz page. */
router.get('/quiztest', async function(req, res, next) {
  const quiz = await quizController.getQuizQuestionAnswer();
  console.log(quiz);
  res.render('pages/quiztest', { 
    title: 'Quiz testing page',
    quiz: quiz
   });
});

/* GET quiz game page. */
router.get('/quiz', function(req, res, next) {
  res.render('pages/quiz', { 
    title: 'Welcome to quiz game' });
});

/* POST new quiz. */
router.post('/createQuiz', async (req, res) => {
  await quizController.postQuiz(req);
  res.redirect('/createQuiz')
})

/* POST new question to quiz. */
router.post('/createQuestion', async (req, res) => {
  await quizController.postQuizQuestion(req);
  res.redirect('/createQuestion')
})

/* POST new answer to quiz. */
router.post('/createAnswer', async (req, res) => {
  await quizController.postQuizQuestionAnswer(req);
  res.redirect('/createAnswer')
})


module.exports = router;


