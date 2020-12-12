import React, { Component, Fragment } from 'react';
import './countries.css';
import {Country} from '../../model/country';

export class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [], showCountries: []}
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

    orderByPopulation(){
        const temp = this.state.showCountries.sort((a,b)=>{return a.population - b.population});
        this.setState({showCountries: temp});
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
                    <button type="button" class="btn btn-primary" onClick={()=>this.orderByPopulation()}>Ordenar por población</button>
                    <div className="row">
                        {listCountries}
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Countries;