import React, { Component, Fragment } from 'react';
import './countries.css';
import { Country } from '../../model/country';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import Alert from 'react-bootstrap/Alert';

const ALPHABETIC = 0;
const POPULATION = 1;
const AREA = 2;
const DENSITY = 3;

export class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = { countries: [], showCountries: [], myFilterString: '', sort: ALPHABETIC, change: false, desc: false }
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

    componentDidUpdate() {
        if (this.state.change === true) {
            this.filterArray();
            this.setState({ change: false });
        } else {

        }
    }

    orderByPopulation(countries) {
        if (this.state.desc) return countries.sort((a, b) => b.population - a.population);
        return countries.sort((a, b) => a.population - b.population);
    }

    orderByArea(countries) {
        if (this.state.desc) return countries.sort((a, b) => b.area - a.area);
        return countries.sort((a, b) => a.area - b.area);
    }

    orderByDensity(countries) {
        if (this.state.desc) return countries.sort((a, b) => b.density - a.density);
        return countries.sort((a, b) => a.density - b.density);
    }

    orderByAlPhabetic(countries) {
        if (this.state.desc) return countries.sort((a, b) => b.name.localeCompare(a.name));
        return countries.sort((a, b) => a.name.localeCompare(b.name));
    }

    filterArray() {
        let orderedCountries = [];
        let filteredCountries = this.state.countries.filter((country) => {
            console.log(country + ': ' + country.name.toLowerCase().startsWith(this.state.myFilterString.toLowerCase()));
            return country.name.toLowerCase().startsWith(this.state.myFilterString.toLowerCase())
        });
        switch (this.state.sort) {
            case ALPHABETIC:
                orderedCountries = this.orderByAlPhabetic(filteredCountries);
                break;
            case POPULATION:
                orderedCountries = this.orderByPopulation(filteredCountries);
                break;
            case AREA:
                orderedCountries = this.orderByArea(filteredCountries);
                break;
            case DENSITY:
                orderedCountries = this.orderByDensity(filteredCountries);
                break;
            default:
                console.error('Wrong option');
                break;
        }

        this.setState({ showCountries: orderedCountries });
    }

    handleSelection(event) {
        console.log(event.target.value);
        this.setState({ sort: parseInt(event.target.value), change: true })

    }

    handleChange(value) {
        console.log(value);
        this.setState({ myFilterString: value, change: true });
    }

    handleDescAsc(value) {
        this.setState({ desc: value, change: true });
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
                    <div className="form-group">
                        <label for="">Filtrado</label>
                        <Typeahead
                            emptyLabel="No hay países con esa selección"
                            onChange={(selected) => this.handleChange(selected)}
                            onInputChange={(selected) => this.handleChange(selected)}
                            options={this.state.showCountries.map((country) => country.name)}
                        />
                        <Alert variant="danger" show={this.state.showCountries.length > 0 ? false : true}>
                            No hay un páis que comience por ese texto!
                        </Alert>
                        <label for="">Criterio de ordenación</label>
                        <select className="form-control" name="" id="" onChange={(e) => this.handleSelection(e)}>
                            <option value={ALPHABETIC}>Alfabético</option>
                            <option value={POPULATION}>Población</option>
                            <option value={AREA}>Área</option>
                            <option value={DENSITY}>Densidad</option>
                        </select>
                        <label for="">asc/desc</label>
                        <DropdownButton id="dropdown-basic-button" title={this.state.desc ? 'Descendente' : 'Ascendente'} >
                            <Dropdown.Item eventKey="0" onSelect={(eventKey, event) => { this.handleDescAsc(true); }}>Descendente</Dropdown.Item>
                            <Dropdown.Item eventKey="1" onSelect={(eventKey, event) => { this.handleDescAsc(false); }}>Ascendente</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="row">
                        {listCountries}
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Countries;