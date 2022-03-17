const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate")

//Instantiate new list with mongoose
const QuizQuestionSchema = new mongoose.Schema({
    
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    quiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
        autopopulate: true
    }],
   
     
});
QuizQuestionSchema.plugin(autopopulate);
module.exports = new mongoose.model('QuizQuestion', QuizQuestionSchema, 'quizquestion');