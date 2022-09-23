import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {

  return (

    <Router>
      <Navigation/>
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/products" exact element={<ProductsPage/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/products/:_id" exact element={<SingleProduct />} />

      </Routes>
    </Router>

  )

}

export default App;
