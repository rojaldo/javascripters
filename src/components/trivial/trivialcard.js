import React, { Component, Fragment } from 'react';
import './trivialcard.css';

export class TrivialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const buttons = this.props.data.answers.map((answer, index) => <button type="button" class="btn btn-primary btn-block" key={index}>{answer}</button>);
        return ( 
            <Fragment>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.data.question}</h4>
                        {buttons}
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default TrivialCard;