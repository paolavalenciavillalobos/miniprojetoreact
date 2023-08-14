import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'

const Checkout = ({cart}) => {

    const totalQuantity = cart.reduce((total, item) => total + item.quantidade, 0);
    const totalValue = cart.reduce((total, item) => total + item.value * item.quantidade, 0);

    return(
        <>
        <Header/>
        <p>This is the checkout</p>
        <h1>Produtos escolhidos</h1>
        <div>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <p>Total items: {totalQuantity}</p>
      <p>Total:{totalValue}</p>
          
        <Footer/>
        </>
    )
}

export default Checkout