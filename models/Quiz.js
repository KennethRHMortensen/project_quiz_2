const mongoose = require("mongoose");

//Instantiate new list with mongoose
const QuizSchema = new mongoose.Schema({
    
    /*
    dateStart: {
        type: Date,
        required: true
    },
    
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    */
     
});

module.exports = new mongoose.model('Quiz', QuizSchema);