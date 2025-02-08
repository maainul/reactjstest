import { useState } from "react"

export const Counter = () =>{

    const [count,setCount] = useState(0)

    function increment(){
        setCount(count => count +1)
    }

    function decrement(){
        setCount(count => count -1)
    }

    return (
        <>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={() =>increment()} >Increment</button>
        <button onClick={() =>decrement()} >Decrement</button>
        <p>------------------------------------------------</p>
        </>
    )
}