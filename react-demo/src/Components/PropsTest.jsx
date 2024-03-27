/*
const User = (props) => {
    console.log(props);
    return(
        <div>
            <img src={props.img} alt={props.name}/>
            <h1>{props.name}</h1>
            <div>
                <h3>Personal Information : </h3>
                <h4>Age : {props.age}  </h4>
                <h4>Hobbies: {props.hobbies.map((hobby,index) => (
                    <li key={index}>{index+1} -- {hobby}</li>
                ))}</h4>
                
                <h5>{props.children}</h5>
            </div>
        </div>
    )
}
*/

const User = ({img,name,age,hobbies,children}) => {
    return(
        <div>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <div>
                <h3>Personal Information : </h3>
                <h4>Age : {age}  </h4>
                <h4>Hobbies: {hobbies.map((hobby,index) => (
                    <li key={index}>{index+1} -- {hobby}</li>
                ))}</h4>
                
                <h5>{children}</h5>
            </div>
        </div>
    )
}

const PropsTest = () => {
  return (
    <User 
        name="Arpita"
        img="https://avatars.githubusercontent.com/u/104673904?v=4"
        age={24}
        hobbies={["Sleeping", "Drawing", "Singing"]}
    >
        <p>This paragraph is not included in props </p>
    </User>
  )
}

export default PropsTest
