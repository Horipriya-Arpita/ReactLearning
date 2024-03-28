//import { useState } from "react"

import { useState } from "react"

const ChangeState = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const [name, setName] = useState("Horipriya");

    const changename = () => {
        setName("Arpita");
    }

    return (
        <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <h1>{name}</h1>
        <button onClick={changename}>Change Name</button>
        </div>
    )
}

export default ChangeState
