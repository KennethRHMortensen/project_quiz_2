const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate")

//Instantiate new list with mongoose
const QuizQuestionAnswerSchema = new mongoose.Schema({
    
    correct: {
        type: Boolean,
        required: true,
        default: false
    },
    points: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: true
    },   
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizQuestion',
        required: true,
        autopopulate: true
    }],
     
});
QuizQuestionAnswerSchema.plugin(autopopulate);
module.exports = new mongoose.model('QuizQuestionAnswer', QuizQuestionAnswerSchema, 'quizanswer');