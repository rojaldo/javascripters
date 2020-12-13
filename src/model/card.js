export class Card{
    constructor(json){
        this.question = json.question;
        this.category = json.category;
        this.difficulty = json.difficulty;
        this.answers = json.incorrect_answers;
        this.answers.push(json.correct_answer);
        this.correctAnswer = json.correct_answer;
    }
}