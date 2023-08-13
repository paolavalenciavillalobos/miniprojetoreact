import { useState } from 'react'
import Products from './paginas/products'
import Header from '../components/header'
import Footer from '../components/footer'
import Carrinho from './paginas/carrinho'
import Finalizarcompra from './paginas/finalizarcompra'
import './App.css'

export const teias = {
  Products: 'products',
  Carrinho: 'cart',
  Finalizarcompra: 'checkout',
}

function App() {

  const [ screen, setScreen ] = useState(teias.Products)

  if (screen === teias.Products) {
    return <Products changeScreen={setScreen} />
  }
  
  if (screen === teias.Carrinho) {
    return <Carrinho changeScreen={setScreen} />
  }

  return <Finalizarcompra changeScreen={setScreen}/>
  

}

export default App
