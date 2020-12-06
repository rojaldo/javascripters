import React, { Component, Fragment } from 'react';
import './showapod.css';
import ReactPlayer from 'react-player'

export class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = { apod: {} }
    }

    // UNSAFE_componentWillReceiveProps(props) {
    //     console.log('shouldComponentUpdate');
    //     this.handleDateChange(this.props.myDate);
    //     return true;
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.myDate !== prevState.myDate) {
            return { someState: nextProps.myDate };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.myDate !== this.props.myDate) {
            this.handleDateChange(this.props.myDate);
        }
    }

    componentDidMount() {
        console.log('myDate: ' + this.props.myDate);
        this.handleDateChange(this.props.myDate);
    }

    handleDateChange = (myDate) => {
        console.log(myDate);
        const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + myDate;
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
            content = <img className="card-img-top w-100" src={this.state.apod.url} alt="" />
        } else if (this.state.apod.media_type === 'video') {
            content = <ReactPlayer url={this.state.apod.url} className="w-100" />
        }
        if (this.state.apod !== {} && this.state.apod.code === undefined) {
            myRender = 
            <div class="card">
                {content}
                <div class="card-body">
                    <h4 class="card-title">{this.state.apod.title}</h4>
                    <h6 class="card-title">{this.state.apod.date}</h6>
                    <p class="card-text">{this.state.apod.explanation}</p>
                </div>
            </div>
        } else if (this.state.apod !== {} && this.state.apod.code === 400){
            myRender = <div class="alert alert-danger" role="alert">
                <strong>Fecha del futuro</strong>
            </div>
        }
        
        else {
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