import { useState, useEffect } from 'react'

function useLocalStorage(key, startingValue = null) {
    let initialValue

    try {
        initialValue = JSON.parse(localStorage.getItem(key))
    } catch (e) {
        initialValue = startingValue;
    }

    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        if(!value) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value]);

    return [value, setValue]
}

export default useLocalStorage;