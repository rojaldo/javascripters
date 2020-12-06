import React, { Component } from 'react';
import './apod.css';
import DateApod from './dateapod';

import ShowApod from './showapod';


export class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { apodDate: {}}
    }


    render() {
        return (
            <div className="container">
                <DateApod sendDate={(date)=>{this.setState({apodDate: date})}}></DateApod>
                <ShowApod myDate={this.state.apodDate}></ShowApod>
            </div>
        );
    }



}

export default Apod;