import './App.css';
import React from 'react';
// npm install react-router-dom im terminal um router zu installieren 
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {About} from './components/About/About'
import {Home} from './components/Home/Home';
import {Contact} from './components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
    <header className="App">
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/home' element={ <Home/> } ></Route>
        <Route path='/about' element={ <About/> } ></Route>
        <Route path='/contact' element={ <Contact/> } ></Route>
      
      </Routes>
    </header>
    </BrowserRouter>
  );
}

export default App;
