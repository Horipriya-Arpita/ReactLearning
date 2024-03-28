const Button = () => {

    const handleClick = () => {
        alert("Yoy Clicked meeeehhhh!!!");
    }
    return(
        <button onClick={handleClick}>Click koro to babu</button>
    )
}

const Copy = () => {

    const copyHandler = () => {
        console.log("You are stealing my content...");
        alert("Stop copying");
    }
    return (
        <p onCopy={copyHandler}>Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. At obcaecati accusamus 
            fugiat consequatur facere, incidunt tenetur 
            nemo excepturi voluptas iusto delectus numquam. 
            Sequi praesentium ratione cumque quod, recusandae nam omnis?</p>
    )
}

const MouseMove = () => {
    
    const moveHandler = () => {
        console.log("You hoverd meee");
    }
    return (
        <p onMouseMove={moveHandler}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Maiores obcaecati fugiat beatae explicabo? Repellendus 
            debitis labore nisi est, eos dolores nam illum voluptates, 
            minus nesciunt maiores alias impedit vitae fugit?
        </p>
    )
}

const Events = () => {
  return (
    <>
    <Button />
    <Copy />
    <MouseMove />
    </>
  )
}

export default Events
