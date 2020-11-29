import React, { Component } from 'react';
import './beercard.css';

export class BeerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <div className="container-fluid d-flex justify-content-center">
                    <img className="card-img-top w-25 m-2" src={this.props.beer.image_url} alt={this.props.beer.name} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.beer.name}</h4>
                    <h6 className="card-subtitle text-muted">{this.props.beer.abv}%</h6>
                    <p className="card-text">{this.props.beer.description}</p>
                </div>
            </div>);
    }
}

export default BeerCard;