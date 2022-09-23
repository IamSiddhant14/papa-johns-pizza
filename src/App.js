import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation'

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

      </Routes>
    </Router>

  )

}

export default App;
