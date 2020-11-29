import React, { Component } from 'react';
import './beers.css';

export class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = { beers: [] }
    }

    render() {
        const listBeers = this.state.beers.map((beer, index) =>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                <div className="card">
                    <div className="container-fluid d-flex justify-content-center">
                        <img className="card-img-top w-25 m-2" src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{beer.name}</h4>
                        <h6 class="card-subtitle text-muted">{beer.abv}%</h6>
                        <p className="card-text">{beer.description}</p>
                    </div>
                </div>
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