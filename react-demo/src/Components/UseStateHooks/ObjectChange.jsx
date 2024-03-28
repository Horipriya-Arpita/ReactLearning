import { useState } from "react"

const ObjectChange = () => {
    
    const [movies, setMovies] = useState([
        {id:1, mname: "Spiderman", ratings: 7},
        {id:2, mname: "Superman", ratings: 5},
        {id:3, mname: "Sardar Udham", ratings: 8},
    ]);

    /*const movies = [
        {mname: "Spiderman", ratings: 7},
        {mname: "Superman", ratings: 5},
        {mname: "Sardar Udham", ratings: 8}
    ];*/

    const showmovies = 
    (
        movies.map((m) => 
        (<ul key={m.id}>
        <li>Id : {m.id}</li>
        <li>Title: {m.mname} </li>
        <li>Rating: {m.ratings}</li>
        </ul>)
        )
    );
          

    const changeMovie = () => {
        
        setMovies(movies.map((m)=> (m.id===1? {id: 1, mname:"Notun naam",ratings: 7 }: m )));
    }

    console.log(showmovies);

    return (
        
        <>
        <h1>{showmovies}</h1>
        <button onClick={changeMovie}><h1>Change 1st Movie Name </h1></button>
        </>
    )
}

export default ObjectChange
