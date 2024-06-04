import { useState, useEffect } from "react";


export function useDebounce(inputText, n) {
    const [debounceValue, setDebounceValue] = useState(inputText)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(inputText)
        }, n)

        return () => {
            clearTimeout(timer);
        }
    }, [inputText, n])
    
    return debounceValue
}