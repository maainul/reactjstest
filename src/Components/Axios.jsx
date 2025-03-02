import axios from "axios"
import { useEffect, useState } from "react"

const URL = `https://jsonplaceholder.typicode.com/users`
export const Axios = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respose = await axios.get(URL)
                setUsers(respose.data)
            } catch (error) {
                console.log('Error fetch data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return (
            <div>Loading ....</div>
        )
    }


    return (
        <>
            <h1>Axios API</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <p>------------------------------------------------</p>

        </>
    )
}