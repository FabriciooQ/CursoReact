import React, {useState, useEffect} from "react";

export default function ScrollY() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        console.log('me ejecuto cuando me monto')

    }, [])

    useEffect(() => {
        const evento = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener("scroll", evento)

    }, [scroll])


    return(
        <>
            <h2>UseEffect</h2>
            <h3>Scroll en Y: {scroll}px</h3>        
        </>

    )
}