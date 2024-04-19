//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axios from "./axios"

const AxiosUse = () => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("")

    //const Url = "https://jsonplaceholder.typicode.com/posts"
    //const BUrl = "https://jsonplaceholder.typicode.com"

    // useEffect(()=>{
    //     axios.get(Url).then((res) => setData(res.data))
    //     .catch((err)=>{
    //         console.log(err);
    //         setIsError(err.message);
    //     });
    // }, []);

    // const getApi = async(Url) => {
    //     try {
    //         //const response = await axios.get(Url);
    //         const response = await axios.get(`${Url}/posts`);
    //         setData(response.data);
    //     } catch(err){
    //         setIsError(err.message);
    //     }
    // }
    // useEffect(()=>{
    //     getApi(BUrl);
    // },[])

    const getApi = async() => {
        try {
            const response = await axios.get("/posts");
            setData(response.data);
        } catch(err){
            setIsError(err.message);
        }
    }
    useEffect(()=>{
        getApi();
    },[])
    const showData = data.map((p,id) => <li key={id}>{p.title}</li>)
    
    return (
        <>
        <h1>Hii</h1>
        {isError !== "" && <h2>{isError}</h2>}
        <div className="container">
            <div className="card">
                {showData}
            </div>
        </div>
        </>
    )
}

export default AxiosUse
