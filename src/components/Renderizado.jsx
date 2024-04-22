import React, {Component} from "react";

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}

class Renderizado extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: false,
        }
    }

    render(){
        return(
            <div>
                <h2> Renderizado Condicional</h2>
                {this.state.login ? <Login></Login> : <Logout></Logout> }
            </div>


        )
    }

}

export default Renderizado