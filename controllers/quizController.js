const mongoUtil = require("../models/mongoUtil");
const Quiz = require("../models/Quiz");

module.exports = {
  // query for users and sorting parameters
    postQuiz: async function (req) {
    const db = await mongoUtil.mongoConnect(); // connect
    console.log(db);
    
    const quiz = new Quiz({
      title: req.body.title,
      description: req.body.description,
      maxScore: req.body.maxScore
    })
    
    Quiz.create(quiz);

    db.close(); // close connection, so we don't have multiple open or leave a hole
  },

  getQuiz: async function (query, sort){
    const db = await mongoUtil.mongoConnect(); // connect
    const quiz = await Quiz.find(query, null, sort);
    db.close();
    return quiz;
  }

};
