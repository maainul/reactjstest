import { useState } from "react"

export const FormSubmission =()=>{

    const[formData,setFormData] = useState({email:'',name:''})
    
    const handleChange = (event) =>{
        const {name,value} = event.target
        setFormData((pd)=>({
            ...pd,
            [name]:value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
        console.log(formData.name,formData.email)
    }

    return(
        <>
        <h1>Submit Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={handleChange} value={formData.email} name="email" placeholder="Enter your email"/>
            <input type="text" onChange={handleChange} value={formData.name} name="name" placeholder="Enter your name" />
            <button type="submit" >Submit</button>
        </form>

        <p>{formData.email}</p>
        <p>{formData.name}</p>

        <p>------------------------------------------------</p>
        </>
    )
} 