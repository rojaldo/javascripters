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
                    let myCards = [];
                    for (const jsonCard of data.results) {
                        const card = new Card(jsonCard)
                        myCards.push(card);
                    }
                    this.setState({ response: data, cards: myCards, resolved: true });


                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

    render() {
        let content = <div></div>
        if (this.state.resolved) {
            content = this.state.cards.map((card, index) =>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-2">
                    <TrivialCard key={index} data={card}></TrivialCard>
                </div>);
        }
        return (
            <Fragment>
                <div class="container">
                    <div class="row">
                        {content}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Trivial;