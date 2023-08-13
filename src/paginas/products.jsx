import React from 'react';
import productsJSON from '../assets/products.json';
import { teias } from '../App';


const ListadeProdutos = ({changeScreen}) => {
  return (
    <>
      <h1>This is an example of taking my array from the JSON and doing something with it</h1>
      <div>
        <ul>
          {productsJSON.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.value}</p>
              <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => changeScreen(teias.Carrinho)}>Ir para o carrinho</button>
    </>
  );
};

export default ListadeProdutos;







