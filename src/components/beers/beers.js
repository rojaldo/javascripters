import React, { Component } from 'react';
import './beers.css';

export class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {beers: []}
    }

    render() {
        return (
            <div className="container">
                <h1>Cervezas</h1>
                
            </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount');
        const apiURL = 'https://api.punkapi.com/v2/beers';
        fetch(apiURL)
        .then((respuesta)=> respuesta.json())
        .then(
            (data) => {
                console.log('Esta es la respuesta: ' + JSON.stringify(data));
                this.setState({beers: data});
            },
            (error) => {console.error('La cosa ha ido mal: ' + error)}
        );
    }
}

export default Beers;