import React, { Component, Fragment } from 'react';
import './apod.css';

export class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { apod: {} }
    }
    render() {
        return (
            <div class="container">
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