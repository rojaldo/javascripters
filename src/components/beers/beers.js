import React, { Component } from 'react';
import {BeerCard} from './beercard';
import './beers.css';

export class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = { beers: [] }
    }

    render() {
        const listBeers = this.state.beers.map((beer, index) =>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                <BeerCard beer={beer}></BeerCard>
            </div>
        )
        return (
            <div className="container">
                <h1>Cervezas</h1>
                <div className="row">
                    {listBeers}
                </div>

            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        const apiURL = 'https://api.punkapi.com/v2/beers';
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    console.log('Esta es la respuesta: ' + JSON.stringify(data));
                    this.setState({ beers: data });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }
}

export default Beers;