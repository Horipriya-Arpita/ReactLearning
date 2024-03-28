import { useState } from "react"

const ArrayChange = () => {

    const [friends, setfriends] = useState(["Arpi", "Hori", "Borti"]);

    const add = () => {
        setfriends([...friends, "Botla"]);
    }

    const remove = () => {
        setfriends(friends.filter((f) => f!=="Botla"));
    }

    const change = () => {
        setfriends(friends.map((f) => (f==="Arpi"? "Arpita":f)));
    }
    
    return (
        <>
            <h1>{friends.map((f,aa) => (<li key={aa}>{f}</li>))}</h1>
            
            <button onClick={add}>Add Friend</button>
            <button onClick={remove}>Remove Friend</button>
            <button onClick={change}>Change Friend</button>
        </>
    )
}

export default ArrayChange
