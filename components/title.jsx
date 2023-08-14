import React from 'react';

const Title = ({cart, children}) => {

const totalQuantity = cart.reduce((total, item) => total + item.quantidade, 0);

return (
    <>
    <h1>{children}</h1>
    <p>Total quantity in cart: {totalQuantity}</p> 
    </>
)

}

export default Title