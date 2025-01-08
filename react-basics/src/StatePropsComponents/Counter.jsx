import React, {useState} from 'react'


const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = ()  => setCount(count+1)
    const decrementCount = () => setCount(count-1)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
        </div>
    )
}

export default Counter