import { useState } from "react"

export const useCounter = (initValue = 10) => {

    const [counter, setCounter] = useState(initValue)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}