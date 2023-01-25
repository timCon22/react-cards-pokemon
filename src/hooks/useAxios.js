import { useState, useEffect } from "react";
import axios from "axios"

const useAxios = (keyInLS, baseUrl) => {
    const [responses, setResponses] = useLocalStorage(keyInLS)

    const addResData = async (formatter = data => data, restOfUrl = "") => {

        const res = await axios.get(`${baseUrl}${restOfUrl}`)

        setResponses(data => [...data, formatter(res.data)])
    }

    return [ responses, addResData ]
}


function useLocalStorage(key, initialValue = []) {
    if(localStorage.getItem(key)){
        initialValue = JSON.parse(localStorage.getItem(key))
    }
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}


export default useLocalStorage

export { useAxios, useLocalStorage }