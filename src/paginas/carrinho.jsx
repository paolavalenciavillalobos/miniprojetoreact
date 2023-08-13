import React from 'react';
import { teias } from '../App';

const Cart = ({changeScreen}) => {
    return(
        <>
        <p>This is the cart</p>
        <button onClick={() => changeScreen(teias.Finalizarcompra)}>Ir para o checkout</button>
        </>
    )
}

export default Cart