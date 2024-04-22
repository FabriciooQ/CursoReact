import React, {Component} from "react"

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
        };

        setInterval(() => {
            this.setState({
                numero: this.state.numero+1
            })
        }, 1000)
    }

    render(){
        return (
        <>
            <h1>Contador</h1>
            <p>{this.state.numero}</p>
        </>
        );
    }
}

export default Contador