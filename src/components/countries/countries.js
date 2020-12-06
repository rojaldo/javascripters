import React, { Component, Fragment } from 'react';
import './countries.css';
import {Country} from '../../model/country';

export class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [] }
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
                    this.setState({ countries: myCountries });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

    render() {
        const listCountries = this.state.countries.map((country, index) => {
            return (
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card m-2">
                        <div class="card-body">
                            <h4 class="card-title">{country.name}</h4>
                            <p class="card-text">{country.capital}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Población: {country.getPopulationInMilions()}</li>
                            <li class="list-group-item">Extensión: {country.getAreaInKM2()}</li>
                        </ul>
                    </div>
                </div>

            );
        });
        return (
            <Fragment>
                <div class="container">

                    <div class="row">
                        {listCountries}
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Countries;