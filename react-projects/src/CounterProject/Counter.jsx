import "./counter.css"
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }
    const initial = () => {
        setCount(0);
    }

    return (
        <>
        <div className="container">
            <div className="number">
                <h1>{count}</h1>
            </div>
            <div className="btn-container">
                <button onClick = {increment} className='btn'><h1>+</h1></button>
                <button onClick = {decrement} className='btn'><h1>-</h1></button>
                <button onClick = {initial} className='btn'><h1>reset</h1></button>
            </div>
        </div>
        
        </>
    )
}

export default Counter
