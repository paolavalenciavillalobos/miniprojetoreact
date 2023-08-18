import { useState } from 'react'
import Products from './paginas/products'
import Carrinho from './paginas/carrinho'
import Finalizarcompra from './paginas/finalizarcompra'
import productsJSON from './assets/products.json';
import GlobalStyle from '../stylecomponents/globalstyle'


export const teias = {
  Products: 'products',
  Carrinho: 'cart',
  Finalizarcompra: 'checkout',
}

function App() {

  const [ screen, setScreen ] = useState(teias.Products)
  const [ productos, setProdutos] = useState(productsJSON)
  const [ cart, setCart] = useState([])

  const addCarrinho = (item) => {
    const productExists = cart.some((product) => product.id === item.id);
    // Si el producto ya existe no add
    if (productExists) {
      return;
    }
    setCart([
      ...cart,{
        ...item,
        quantidade: 1
      }
    ])
  }

  return (
    <>
      <GlobalStyle /> 
      {screen === teias.Products && (
        <Products changeScreen={setScreen} productos={productos} addCarrinho={addCarrinho} cart={cart} />
      )}
      {screen === teias.Carrinho && (
        <Carrinho changeScreen={setScreen} cart={cart} setCart={setCart} />
      )}
      {screen === teias.Finalizarcompra && (
        <Finalizarcompra changeScreen={setScreen} cart={cart} />
      )}
    </>
  );
}

export default App
