import React, {Component} from "react";

class Contador3 extends Component{
    state = {
        numero:0
    }
    sumar = () => {
        this.setState({
            numero: this.state.numero + 1 
        })
    }

    restar = () => {
        this.setState({
            numero: this.state.numero - 1 
        })
    }

    render(){
        return(
            <>
            <h1>Contador 2</h1>
            <h3>{this.state.numero}</h3>
            <nav>
                <button onClick={this.sumar}><b>+</b></button>
                <button onClick={this.restar}><b>-</b></button>
            </nav>
            </>
        )
    }

}


class Contador2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            numero: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(){
        this.setState({
            numero: this.state.numero + 1
        })
    }

    restar(){
        this.setState({
            numero: this.state.numero - 1
        })
    }


    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>{this.state.numero}</h3>

                <nav>
                    <button onClick={this.sumar}><b>+</b></button>
                    <button onClick={this.restar}><b>-</b></button>
                </nav>
            </div>
        )
    }
}

export {Contador2,Contador3}