import { useState } from 'react'
import Products from './paginas/products'
import Carrinho from './paginas/carrinho'
import Finalizarcompra from './paginas/finalizarcompra'
import productsJSON from './assets/products.json';


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
    
    setCart([
      ...cart,{
        ...item,
        quantidade: 1
      }
    ])
  }

  if (screen === teias.Products) {
    return <Products changeScreen={setScreen} productos={productos} addCarrinho={addCarrinho} cart={cart} />
  }
  
  if (screen === teias.Carrinho) {
    return <Carrinho changeScreen={setScreen} cart={cart} setCart={setCart}/>
  }

  return <Finalizarcompra changeScreen={setScreen} cart={cart}/>
  

}

export default App
