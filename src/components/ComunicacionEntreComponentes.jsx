import React, {Component} from "react"

export class Padre extends Component{
    state = {
        mensaje: "Mensaje del padre para el hijo",
        numero1: 0,
        numero2: 0
    }

    actualizarEstado = () => {
        this.setState({
            mensaje: "Mensaje del padre para el hijo",
            numero1: this.state.numero1 + 1,
            numero2: this.state.numero2
        })
    }

    actualizarPadre = () => {
        this.setState({
            mensaje: "Mensaje del padre para el hijo",
            numero1: this.state.numero1,
            numero2: this.state.numero2 + 1
        })
    }

    render(){
        return(
            <>
                <h1>Comunicacion entre Componentes</h1>
                <h2>Padre</h2>
                <p>Mensaje del hijo al padre, numero:{this.state.numero2}</p>
                <button onClick={this.actualizarEstado}>Mandar Mensaje a Hijo</button>
                <Hijo mensaje = {this.state.mensaje} n={this.state.numero1} f={this.actualizarPadre}></Hijo>
            </>
        )
    }
}


export class Hijo extends Component{
    render(){
        return(
            <>
                <h2>Hijo</h2>
                <p>{this.props.mensaje}, numero:{this.props.n}</p>
                <button onClick={this.props.f}>Mandar Mensaje a padre</button>
            </>
        )
    }

}