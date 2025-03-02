import { useEffect, useState } from "react"
const URL = `https://jsonplaceholder.typicode.com/users`
export const FetchApi =() =>{
    console.log("Fetch API renderd")
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data =>{
            setUsers(data);
            setLoading(false);
        }).catch(error =>{
            console.log('Error Fetch data',error)
            setLoading(false)
        })
    },[]);

    if(loading){
        return(
            <div>Loading ....</div>
        )
    }

    return (
        <>
        <h1>Fetch API</h1>
        <ul>
           {users.map(user =>(
            <li key={user.id}>{user.name}</li>
           ))}
        </ul>
        <p>------------------------------------------------</p>
        </>
    )
}