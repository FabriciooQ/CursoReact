import React, {Component} from "react"

export default class CicloDeVida extends Component{

    constructor(props){
        super(props)
        this.state = {
            render: false
        }
    }

    actualizarRender = (e) => {
        if (this.state.render){
            this.setState({
                render: false
            })
        }else{
            this.setState({
                render: true
            })
        }
        console.log(this.state.render)
    }

    componentDidMount(){
        console.log('1. Creado pero no montado')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('2. Componente montado')
    }

    componentWillUnmount(){ //no funca
        console.log('3. Componente desmontado')
        
    }

    render(){
        return(
            <>
                <h1>CICLO DE VIDA DE COMPONENTES</h1>
                {this.state.render && <p>Montado</p>}
                <button onClick={this.actualizarRender}>Montar/Desmontar</button>
            </>
        )
    }
}