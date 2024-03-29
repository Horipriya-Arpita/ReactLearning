import { useEffect, useState } from 'react'

const ChangeValue = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(`Hiiii ${value}`);
        document.title = `wow ${value}`;
    },[value]);

    const handleClick = () => {
        setValue(value+1);
    }
    return (
        <>
        <h1>{value}</h1>
        <button onClick={handleClick}><h1>Click to increase</h1></button>
        </>
    )
}

export default ChangeValue
