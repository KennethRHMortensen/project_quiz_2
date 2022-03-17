const mongoose = require("mongoose");


//Instantiate new list with mongoose
const QuizSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    maxScore: {
        type: Number,
        required: true
    },
    questions: []
});

module.exports = new mongoose.model('Quiz', QuizSchema, 'quiz');