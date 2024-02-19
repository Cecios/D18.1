import React,{useState} from "react"

const BooleanState = () => {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)
    
    return (
        <>
            <p>Lo stato è : {isVisible ? 'Visible' : 'Non visible'} </p>
            <button onClick={toggleVisibility}> Cambia stato </button>
        </>
    )
}
export default BooleanState;