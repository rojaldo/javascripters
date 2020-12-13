export class Card{
    constructor(json){
        this.question = json.question;
        this.category = json.category;
        this.difficulty = json.difficulty;
        this.answers = json.incorrect_answers;
        this.answers.push(json.correct_answer);
        this.correctAnswer = json.correct_answer;
        this.responded = false;
        this.answerIndex = -1;
    }

    setResponded(){
        this.responded = true;
    }

    isResponded(){
        return this.responded;
    }

    setAnswer(index){
        this.answerIndex = parseInt(index);
    }

    getAnswerIndex() {
        return this.answerIndex;
    }

    isTheCorrectAnswer(index){
        return this.answers[index] === this.correctAnswer;
    }

    isTheIncorrectAnswer(index){
        return (index === this.answerIndex) && !this.isTheCorrectAnswer(index)
    }
}