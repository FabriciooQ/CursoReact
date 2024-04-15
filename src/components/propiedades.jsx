import React from 'react'

export default function Propiedades(props){
    return(
        <div>
            <h2>Propiedades {props.porDefecto}</h2>
        </div>
    )
}


Propiedades.defaultProps = {
    porDefecto : 'por defecto'
}