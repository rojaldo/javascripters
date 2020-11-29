import React, { Component } from 'react';
import './display.css';

export class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="alert alert-light d-flex justify-content-end" role="alert">
                <strong id="display" className="h2">{this.props.mydisplay}</strong>
            </div>);
    }
}

export default Display;