const Cart = () => {
    const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodies"];

    return(
        <>
        <h1>Cart Item 🛒</h1>

        {items.length > 0 && <h3>Your have {items.length} items in your card </h3>}
        
        <h2>Products 👇</h2>
        {items.map((item) => (
            <li key={Math.random()}>
                {item}
            </li>
        ))}
        </>
    )
}

const Valid = () => {
    return (<button><h1>Valid Password 👍 </h1></button>);
}

const Invalid = () => {
    return (<button><h1>Inalid Password 👎 </h1></button>);
}

const Password = (({isValid}) => {

    /*if(isValid){
        return <Valid />
    }
    return <Invalid />*/
    return isValid? <Valid /> : <Invalid />;
})

const ConditionalRendering = () => {
  return (
    <>
    <Password 
    isValid={true} />

    <Cart/>
    </>
    
  )
}

export default ConditionalRendering
