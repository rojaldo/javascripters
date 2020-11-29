import React, { Component } from 'react';
import './form.css';

export class HeroForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: true,
            nuevoHeroe: { name: '', description: '' }
        }
    }

    handleChange(event) {
        if (event.target.id === 'name') {
            const heroe = { name: event.target.value, description: this.state.nuevoHeroe.description };
            this.setState({ nuevoHeroe: heroe })
            this.setState({ disable: event.target.value === '' || this.props.heroes.find((element) => event.target.value === element.name) })
        } else if (event.target.id === 'description') {
            const heroe = { description: event.target.value, name: this.state.nuevoHeroe.name };
            this.setState({ nuevoHeroe: heroe })
        }
    }

    handleClick() {
        this.props.newhero(this.state.nuevoHeroe);
        this.setState({nuevoHeroe: {name:'', description:''}, disable: true})
    }

    render() {
        return (
            <div className="form-group">
                <label>Nombre del héroe</label>
                <input type="text"
                    className="form-control" name="" id="name" aria-describedby="helpId" placeholder=""
                    value={this.state.nuevoHeroe.name} onChange={(event) => this.handleChange(event)} />

                <label>Descripción</label>
                <input type="text"
                    className="form-control" name="" id="description" aria-describedby="helpId" placeholder=""
                    value={this.state.nuevoHeroe.description} onChange={(event) => this.handleChange(event)} />

                <button type="button" className="btn btn-primary mt-3" onClick={() => this.handleClick()} disabled={this.state.disable}>Nuevo héroe</button>
            </div>);
    }
}

export default HeroForm;