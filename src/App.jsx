import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes , Route } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
