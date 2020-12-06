import React, { Component, Fragment } from 'react';
import './showapod.css';
import ReactPlayer from 'react-player'

export class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = { apod: {} }
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('shouldComponentUpdate');
        this.handleDateChange(props.myDate);
        return true;
    }

    componentDidMount() {
        const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    this.setState({ apod: data })
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    }

    handleDateChange = (myDate) => {
        console.log(myDate);
        const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6&date=' + myDate;
        fetch(apiURL)
            .then((respuesta) => respuesta.json())
            .then(
                (data) => {
                    this.setState({ apod: data })
                },
                (error) => { console.error('La cosa ha ido mal: ' + error) }
            );
    };

    render() {
        let myRender = {};
        let content = <div></div>
        if (this.state.apod.media_type === 'image') {
            content = <img className="card-img-top" src={this.state.apod.url} alt="" />
        } else if (this.state.apod.media_type === 'video') {
            content = <ReactPlayer url={this.state.apod.url} className="w-100"/>
        }
        if (this.state.apod !== {}) {
            myRender = <div className="jumbotron m-4">
                <h1 className="display-4">{this.state.apod.title}</h1>
                {content}
                <p className="lead">{this.state.apod.date}</p>
                <hr className="my-2" />
                <p>{this.state.apod.explanation}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href={this.state.apod.hdurl} role="button">Descargar</a>
                </p>
            </div>
        } else {
            <h1>loading...</h1>
        }
        return (
            <Fragment>
                <div className="container">
                    {myRender}
                </div>
            </Fragment>);
    }
}

export default ShowApod;