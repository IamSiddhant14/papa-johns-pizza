import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation'
import Products from './components/Products'
import Cart from './pages/Cart'

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

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </Router>

  )

}

export default App;
