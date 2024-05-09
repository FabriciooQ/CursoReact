import React, {useState, useEffect} from "react";

export default function Reloj(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setInterval(() => {setHora(new Date().toLocaleTimeString())},1000)

        return(
            clearInterval()
        )
    },[visible])

    return(
        <>
            <h2>RELOJ CON HOOKS</h2>
            <div>
                <button onClick={() => {setVisible(true)}}>Iniciar</button>
                <button onClick={() => {setVisible(false)}}>Parar</button>
            </div>
            {visible && <h3>{hora}</h3>}
        </>
    )
}