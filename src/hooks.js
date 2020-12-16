import React, { useState, useEffect } from 'react'

function useLocalStorage(key, startingValue = null) {
    // console.log(JSON.parse(localStorage.getItem(key)))
    let initialValue;
    // localStorage.getItem(key) || startingValue;

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