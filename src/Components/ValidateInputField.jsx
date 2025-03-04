import React, { useState } from 'react'

const ValidateInputField = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            return
        }
        setError("")
        alert(email)
        console.log("Form submitted with email:", email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setError("")
                    }}
                    placeholder='Enter your email'
                />
                {error && <p style={{ color: "red" }} >{error}</p>}
                <button type='submit' disabled={!validateEmail(email)} >Submit</button>
            </form>

        </div>
    )
}

export default ValidateInputField
