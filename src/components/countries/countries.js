import React, { Component, Fragment } from 'react';
import './countries.css';
import { Country } from '../../model/country';

const ALPHABETIC = 0;
const POPULATION = 1;
const AREA = 2;
const DENSITY = 3;

export class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [], showCountries: [] }
    }

    componentDidMount() {
        console.log('componentDidMount');
        const apiURL = 'https://restcountries.eu/rest/v2/all';
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    let myCountries = [];
                    for (const country of data) {
                        myCountries = [...myCountries, new Country(country)]
                    }
                    this.setState({ countries: myCountries, showCountries: myCountries });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

    orderByPopulation() {
        const temp = this.state.countries.sort((a, b) => { return a.population - b.population });
        this.setState({ showCountries: temp });
    }
    orderByArea() {
        const temp = this.state.countries.sort((a, b) => { return a.area - b.area });
        this.setState({ showCountries: temp });
    }
    orderByDensity() {
        const temp = this.state.countries.sort((a, b) => { return a.density - b.density });
        this.setState({ showCountries: temp });
    }
    orderByAlPhabetic() {
        const temp = this.state.countries.sort((a, b) => { return a.name.localeCompare(b.name) });
        this.setState({ showCountries: temp });
    }

    handleSelect(e) {
        console.log(e.target.value);
        switch (parseInt(e.target.value)) {
            case ALPHABETIC:
                this.orderByAlPhabetic();
                break;
            case POPULATION:
                this.orderByPopulation();
                break;
            case AREA:
                this.orderByArea();
                break;
            case DENSITY:
                this.orderByDensity();
                break;

            default:
                console.error('Wrong option');
                break;
        }
    }

    render() {
        const listCountries = this.state.showCountries
            .map((country, index) => {
                return (
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h4 className="card-title">{country.name}</h4>
                                <p className="card-text">{country.capital}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Población: {country.getPopulationInMilions()}</li>
                                <li className="list-group-item">Extensión: {country.getAreaInKM2()}</li>
                            </ul>
                        </div>
                    </div>

                );
            });
        return (
            <Fragment>
                <div className="container">
                    <div class="form-group">
                        <label for="">Criterio de ordenación</label>
                        <select class="form-control" name="" id="" onChange={(e) => this.handleSelect(e)}>
                            <option value={ALPHABETIC}>Alfabético</option>
                            <option value={POPULATION}>Población</option>
                            <option value={AREA}>Área</option>
                            <option value={DENSITY}>Densidad</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.orderByPopulation()}>Ordenar por población</button>
                    <div className="row">
                        {listCountries}
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Countries;