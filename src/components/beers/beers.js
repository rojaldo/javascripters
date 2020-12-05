import React, { Component } from 'react';
import { BeerCard } from './beercard';
import './beers.css';
import Slider from '@material-ui/core/Slider';



export class Beers extends Component {

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
        console.log(this.state.value);
    };

    valuetext(value) {
        return `${value}°C`;
    }

    constructor(props) {
        super(props);
        this.state = { beers: [], value: [20, 25] }
    }

    render() {
        const listBeers = this.state.beers
            .filter(element => element.abv >= this.state.value[0] && element.abv <= this.state.value[1])
            .map((beer, index) =>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                    <BeerCard beer={beer}></BeerCard>
                </div>
            )
        return (
            <div className="container">
                <h1>Cervezas</h1>
                <Slider
                    value={this.state.value}
                    onChange={(event, value) => this.handleChange(event, value)}
                    step={0.5}
                    marks
                    min={0}
                    max={40}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={(value) => this.valuetext(value)}
                />
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