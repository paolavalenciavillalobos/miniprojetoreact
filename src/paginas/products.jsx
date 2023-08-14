import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import ProductCard from '../../components/productlist'
import Title from '../../components/title'
import { teias } from '../App';


const ListadeProdutos = ({changeScreen, productos, addCarrinho, cart}) => {
  return (
    <>
      <h1>This is an example of taking my array from the JSON and doing something with it</h1>
      <Header/>
      <Title cart={cart}>Produtos</Title>

      {productos.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          value={product.value}
          image={product.image}
          addCarrinho={addCarrinho}
          />
        ))}

      <button onClick={() => changeScreen(teias.Carrinho)}>Ir para o carrinho</button>
      <Footer/>
    </>
  );
};

export default ListadeProdutos;







