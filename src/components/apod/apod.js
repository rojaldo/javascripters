import React, { Component } from 'react';
import './apod.css';
import TextField from '@material-ui/core/TextField';
import Moment from 'moment';


export class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { apod: {}, selectedDate: new Date('2014-08-18T21:11:54') }
    }

    handleDateChange = (event) => {
        console.log(event.target.value);
        const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + event.target.value;
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    this.setState({ apod: data });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
        this.setState({ selectedDate: event.target.value });
    };
    render() {
        return (
            <div class="container">
                <TextField
                    id="date"
                    label="Busca una fecha"
                    type="date"
                    defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                    onChange={(event)=>this.handleDateChange(event)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div class="jumbotron m-4">
                    <h1 class="display-4">{this.state.apod.title}</h1>
                    <img class="card-img-top" src={this.state.apod.url} alt="" />
                    <p class="lead">{this.state.apod.date}</p>
                    <hr class="my-2" />
                    <p>{this.state.apod.explanation}</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href={this.state.apod.hdurl} role="button">Descargar</a>
                    </p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    this.setState({ apod: data });
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

}

export default Apod;