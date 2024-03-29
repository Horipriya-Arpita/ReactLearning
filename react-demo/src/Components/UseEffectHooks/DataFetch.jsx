import { useEffect, useState } from 'react'

const DataFetch = () => {

    const [data, setData] = useState([]);

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
    }


    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if(data && data.length) setData(data);
        }

        getData();
    },);

    return (
        <>
        <button onClick={handleClick}><h3>Change the Color</h3></button>
        <h4>
            <ul>{data.map((m,index) => <li key={index} style={{color: buttonClicked? 'blue' : 'inherit'}}>{m.title}</li>)}</ul>
        </h4>
        </>
    )
}

export default DataFetch
