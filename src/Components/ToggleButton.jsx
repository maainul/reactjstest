import { useState } from "react"

export const ToggleButton = () =>{

    const [toggle,setToggle] = useState(false)
    
    function handleClick(){
        setToggle(prevState => !prevState)
    }

    return (
        <>
        <h1>Toggle Button</h1>
        <h2>{toggle}</h2>
        <button onClick={() =>handleClick()}>{toggle ? 'ON' :'OFF'}</button>
        <p>------------------------------------------------</p>
        </>
    )
}