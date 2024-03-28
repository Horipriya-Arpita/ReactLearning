import { useState } from "react"

const Form = () => {

    const [userName, setuserName] = useState("...");

    const handleChange = (event) => {
        setuserName(event.target.value);
        console.log("your name : " + event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You typed : ${userName}`);
        setuserName("...");
    }

    return (
        <>
        
        <h1>Form Demo : </h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={userName} onChange={handleChange}></input>
            <button>Submit</button>
        </form>
        
        </>
    )
}

export default Form
