import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import ProductCard from '../../components/productlist'
import Title from '../../components/title'
import { teias } from '../App';
import BodyProducts from '../../stylecomponents/bodyproducts';


const ListadeProdutos = ({changeScreen, productos, addCarrinho, cart}) => {
  return (
    <>
      <Header/>
      <Title cart={cart}>Produtos</Title>

    <BodyProducts>
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

      </BodyProducts>

      <button onClick={() => changeScreen(teias.Carrinho)}>Ir para o carrinho</button>
      <Footer/>
    </>
  );
};

export default ListadeProdutos;







