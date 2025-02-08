import { useState } from "react"

export const FormSubmission =()=>{
    const [formData,setFormData] = useState({name:'',email:''})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData((p)=>({
           ...p,
           [name]:[value] 
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Name : ${formData.name} Email: ${formData.email}`)
        console.log(formData.name, formData.email)
    }

    return(
        <>
        <h1>Submit Form</h1>
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="name" placeholder="Enter name ...."/>
            <input type="email" onChange={handleChange} name="email" placeholder="Enter Email...." />
            <button type="submit" >Submit</button>
        </form>
    
        <p>Name : {formData.name}</p>
        <p>Email :{formData.email}</p>
        <p>------------------------------------------------</p>
        </>
    )
} 