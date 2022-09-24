import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useState , useEffect } from 'react';
import { getCart, storeCart } from './helpers';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {

  const [ cart , setCart ] = useState({});

  useEffect(() => {
     getCart().then( cart => {
      setCart(JSON.parse(cart))
     });
     
  } , [] )

  useEffect(() => {
    storeCart(JSON.stringify(cart));
      
 } , [cart] )

  return (

    <Router>
      <CartContext.Provider value = {{cart:cart , setCart}}>

        <Navigation />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/products" exact element={<ProductsPage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/products/:_id" exact element={<SingleProduct />} />

        </Routes>

      </CartContext.Provider>
    </Router>

  )

}

export default App;
