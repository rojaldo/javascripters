import React, { Component, Fragment } from 'react';
import './trivialcard.css';

export class TrivialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {card: this.props.data}
    }

    handleAnswer(index){
        console.log('handleAnswer: '+index);
        let temp  = this.state.card;
        temp.setResponded();
        temp.setAnswer(index);
        this.setState({card: temp});
    }

    getClass(index){
        if(this.state.card.isTheIncorrectAnswer(index)){
            return "btn btn-danger btn-block";    
        }
        else if(this.state.card.isTheCorrectAnswer(index)) {
            return "btn btn-success btn-block";    
        } 
        return "btn btn-secondary btn-block";
    }

    render() {
        let buttons = <div></div>;
        if(this.state.card.isResponded()){
            buttons = this.state.card.answers.map((answer, index) =>
            <button type="button" className={this.getClass(index)} disabled key={index}>{answer}</button>);
        }else {
            buttons = this.state.card.answers.map((answer, index) =>{
                console.log(index);
            return <button type="button" className="btn btn-primary btn-block" key={index} value={index} onClick={(event)=>{this.handleAnswer(event.target.value)}}>{answer}</button>});
        }
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h4 class="card-title">{this.state.card.question}</h4>
                        {buttons}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TrivialCard;