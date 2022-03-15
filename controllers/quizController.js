const mongoUtil = require("../models/mongoUtil");
const Quiz = require("../models/Quiz");
const QuizQuestion = require("../models/QuizQuestion");
const QuizQuestionAnswer = require("../models/QuizQuestionAnswer");


module.exports = {
  // query for users and sorting parameters
    postQuiz: async function (req) {
    const db = await mongoUtil.mongoConnect(); // connect
    
    const quiz = new Quiz({
      title: req.body.title,
      description: req.body.description,
      maxScore: req.body.maxScore
    })
    Quiz.create(quiz, function(error){
      if(error){
        console.log('fejl');
      }
      db.close(); // close connection, so we don't have multiple open or leave a hole
    });
  },

    postQuizQuestion: async function (req) {
    const db = await mongoUtil.mongoConnect(); // connect
    
    const quiz = new QuizQuestion({
      title: req.body.questionTitle,
      description: req.body.questionDescription,
      quiz: req.body.quiz
    })
    
    QuizQuestion.create(quiz, function(error){
      if(error){
        console.log('fejl');
      }
      db.close(); // close connection, so we don't have multiple open or leave a hole
    });
  },

    postQuizQuestionAnswer: async function (req) {
    const db = await mongoUtil.mongoConnect(); // connect
    
    const quiz = new QuizQuestionAnswer({
      correct: req.body.answerCorrect,
      points: req.body.points,
      answer: req.body.answer,
      question: req.body.question
    })
 
    QuizQuestionAnswer.create(quiz, function(error){
      if(error){
        console.log('fejl');
      }
      db.close(); // close connection, so we don't have multiple open or leave a hole
    });
  },


  getQuiz: async function (query, sort){
    const db = await mongoUtil.mongoConnect(); // connect
    const quiz = await Quiz.find(query, null, sort);
    db.close();
    return quiz;
  },

  getQuizQuestion: async function (query, sort){
    const db = await mongoUtil.mongoConnect(); // connect
    console.log('im here');
    const quiz = await QuizQuestion.find(query, null, sort);
    console.log('no now im here');
    db.close();
    return quiz;
  },

  getQuizQuestionAnswer: async function (query, sort){
    const db = await mongoUtil.mongoConnect(); // connect
    const quiz = await QuizQuestionAnswer.find(query, null, sort);
    db.close();
    return quiz;
  }

};
