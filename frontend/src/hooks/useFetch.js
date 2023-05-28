import axios from 'axios'
import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
                setLoading(null)
            })
            .catch(err => setError(err))
    }, [])

    return { loading, data, error }

}

export default useFetch