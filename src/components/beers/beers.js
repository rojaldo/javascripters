import React, { Component } from 'react';
import { BeerCard } from './beercard';
import './beers.css';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const ordenacionAPI = 0;
const ordenacionalfabetica = 1;
const ordenacionalcohol = 2;

export class Beers extends Component {

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
        console.log(this.state.value);
    };

    handleSort = (event) => {
        console.log(event.target.value);
        this.setState({ sort: event.target.value });
    };

    valuetext(value) {
        return `${value}°C`;
    }

    constructor(props) {
        super(props);
        this.state = { beers: [], value: [0, 5], sort: ordenacionAPI }
    }

    render() {
        // TODO: Esto es un desastre que hay que arreglar
        let listBeers = this.state.beers
            .filter(element => element.abv >= this.state.value[0] && element.abv <= this.state.value[1])
            .map((beer, index) =>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                    <BeerCard beer={beer}></BeerCard>
                </div>
            )
        switch (this.state.sort) {
            case ordenacionAPI:
                break;
            case ordenacionalfabetica:
                listBeers = this.state.beers
                    .filter(element => element.abv >= this.state.value[0] && element.abv <= this.state.value[1])
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((beer, index) =>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                            <BeerCard beer={beer}></BeerCard>
                        </div>
                    )

                break;
            case ordenacionalcohol:
                listBeers = this.state.beers
                    .filter(element => element.abv >= this.state.value[0] && element.abv <= this.state.value[1])
                    .sort((a, b) => a.abv - b.abv)
                    .map((beer, index) =>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2" key={index}>
                            <BeerCard beer={beer}></BeerCard>
                        </div>
                    )

                break;

            default:
                break;
        }
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
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.sort}
                    onChange={(event) => this.handleSort(event)}
                >
                    <MenuItem value={0}>Por el API</MenuItem>
                    <MenuItem value={1}>Alfabético</MenuItem>
                    <MenuItem value={2}>Graduación alcohólica</MenuItem>
                </Select>
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
                    this.setState({ beers: data });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }
}

export default Beers;