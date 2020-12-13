import React, { Component, Fragment } from 'react';
import { TrivialCard } from './trivialcard';
import './trivial.css';
import { Card } from '../../model/card';

export class Trivial extends Component {
    constructor(props) {
        super(props);
        this.state = { response: {}, cards: [], resolved: false }
    }

    componentDidMount() {
        console.log('componentDidMount');
        const apiURL = 'https://opentdb.com/api.php?amount=10';
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    const card = new Card(data.results[0])
                    const myCards = [card];
                    this.setState({ response: data , cards: myCards, resolved: true});


                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

    render() { 
        let content = <div></div>
        if (this.state.resolved){
            content = <TrivialCard data={this.state.cards[0]}></TrivialCard>
        }
    return ( 
            <Fragment>
                <div class="container">
                    {content}
                </div>
            </Fragment>
         );
    }
}
 
export default Trivial;