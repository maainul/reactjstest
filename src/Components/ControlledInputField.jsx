import { useState } from "react"

export const ControlledInputField = () => {
    console.log("Controlled Input renderd")

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <h1>Controlled Input Field</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something...."
            />
            <h3>Typed Value : {inputValue}</h3>
            <p>------------------------------------------------</p>

        </>
    )
}