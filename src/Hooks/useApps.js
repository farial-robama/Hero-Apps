import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('/appsData.json')
        .then(res => setApps(res.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
        
    },[])
    return { apps, loading, error}
}
export default useApps;