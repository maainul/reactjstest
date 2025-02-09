import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



export const DebounceInput = () => {

    const [query, setQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)
        return () => {
            clearTimeout(handler);
        }
    }, [query])

    useEffect(() => {
        if (debouncedQuery) {
            fetchData(debouncedQuery);
        }
    }, [debouncedQuery])

    const fetchData = async (searchTerm) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`);
            setResults(response.data)
        } catch (error) {
            console.error('Error fetching data', error)
        }
    }

    return (
        <>
            <h2>Debounce Search</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ...."
            />
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.name}</li>

                ))}
            </ul>
        </>
    )
}