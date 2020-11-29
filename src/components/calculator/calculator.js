import React, { Component } from 'react';
import { Display } from './display';
import { Keyboard } from './keyboard';
import './calculator.css';

const INICIAL = 0;
const PRIMERNUMERO = 1;
const SEGUNDONUMERO = 2;
const RESULTADO = 3;

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 0 }
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.operator = '';
        this.resultado = 0
        this.estado = INICIAL;

    }
    render() {
        return (
            <div className="container">
                <Display mydisplay={this.state.display}></Display>
                <Keyboard myevent={(value) => { this.handleEvent(value) }}></Keyboard>
            </div>
        );
    }

    handleEvent(valor) {
        console.log(valor);
        // this.actualizarDisplay(valor);
        if (typeof valor === 'number') {
            this.handleNumber(valor);
        } else {
            this.handleSymbol(valor);
        }
    }

    handleNumber(numero) {
        let temp = '';
        switch (this.estado) {
            case INICIAL:
                this.primerNumero = numero;
                temp = '' + numero;
                this.setState({ display: temp })
                this.estado = PRIMERNUMERO;
                break;
            case PRIMERNUMERO:
                this.primerNumero = this.primerNumero * 10 + numero;
                this.actualizarDisplay(numero);
                break;
            case SEGUNDONUMERO:
                this.segundoNumero = this.segundoNumero * 10 + numero;
                this.actualizarDisplay(numero);
                break;
            case RESULTADO:
                this.inicializaCalculadora();
                this.primerNumero = numero;
                temp = '' + numero;
                this.setState({ display: temp })
                this.estado = PRIMERNUMERO;
                break;

            default:
                break;
        }
    }

    handleSymbol(simbolo) {
        switch (this.estado) {
            case INICIAL:

                break;
            case PRIMERNUMERO:
                if (this.esOperador(simbolo)) {
                    this.operador = simbolo;
                    this.actualizarDisplay(simbolo);
                    this.estado = SEGUNDONUMERO;
                }
                break;
            case SEGUNDONUMERO:
                if (simbolo === '=') {
                    this.resultado = this.calculaResultado();
                    this.actualizarDisplay('=' + this.resultado)
                    this.estado = RESULTADO;
                }
                break;
            case RESULTADO:
                if (this.esOperador(simbolo)) {
                    this.primerNumero = this.resultado;
                    this.operador = simbolo;
                    this.segundoNumero = 0;
                    this.resultado = 0;
                    const temp = this.primerNumero + this.operador;
                    this.setState({ display: temp });
                    this.estado = SEGUNDONUMERO;
                }
                break;

            default:
                break;

        }
    }

    calculaResultado() {
        switch (this.operador) {
            case '+':
                return this.primerNumero + this.segundoNumero;
            case '-':
                return this.primerNumero - this.segundoNumero;
            case '*':
                return this.primerNumero * this.segundoNumero;
            case '/':
                return this.primerNumero / this.segundoNumero;

            default:
                break;
        }
    }

    esOperador(simbolo) {
        return simbolo === '+' || simbolo === '-' || simbolo === '*' || simbolo === '/'
    }

    inicializaCalculadora() {
        this.resultado = 0;
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.operador = '';

    }

    actualizarDisplay(valor) {
        let miCadena = this.state.display;
        miCadena += valor;
        this.setState({ display: miCadena })
    }

    borrarDisplay() {
        this.setState({ display: '' })
    }
}

export default Calculator;