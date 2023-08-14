import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { teias } from '../App';
import Title from '../../components/title';

const Cart = ({changeScreen, cart, setCart}) => {

    const aumentarQuantidade = (item) => {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantidade: product.quantidade + 1
          };
        }
        return product;
      });
      setCart(updatedCart);
    };
  
    const disminuirQuantidade = (item) => {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id && product.quantidade > 1) {
          return {
            ...product,
            quantidade: product.quantidade - 1
          };
        }
        return product;
      });
      setCart(updatedCart);
    };
  
    return (
      <>
        <Header/>
        <Title cart={cart}>Carrinho</Title>
        <p>This is the cart</p>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantidade}</p>
                <p>Price: R$ {item.value}</p>
              </div>
              <button onClick={() => disminuirQuantidade(item)}>Restar</button>
              <button onClick={() => aumentarQuantidade(item)}>Sumar</button>
            </div>
          ))}
        </div>
        <button onClick={() => changeScreen(teias.Finalizarcompra)}>Ir para o checkout</button>
        <Footer/>
      </>
    );
  }
  
  export default Cart;