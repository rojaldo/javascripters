import React, { Component } from 'react';
import './heroeslist.css';

export class HeroesList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleRemove(index) {
        this.props.remove(index);
    }

    render() {
        const listHeroes = this.props.heroes.map((hero, index) =>
        <li className="list-group-item" key={index} id={'hero-li-' + index}>
            <div className="d-flex justify-content-between">
                <div className="container">
                    <h4>{hero.name}</h4>
                    <p>{hero.description}</p>
                </div>
                <div className="container-fluid d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={() => { this.handleRemove(index) }}>Eliminar</button>
                </div>
            </div>
        </li>);
        return (<ul className="list-group">
            {listHeroes}
        </ul>);
    }
}

export default HeroesList;