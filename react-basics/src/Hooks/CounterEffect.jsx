import React, { useEffect, useState } from 'react'

export const CounterEffect = () => {

    const [count, setCount] = useState(0)


    const handleClick = () => {
            setCount(count+1)
        }

    useEffect(()=>{console.log(count);
    },[])

    return (
        <>
            <div>{count}</div>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}
