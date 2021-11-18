
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from './routes'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
          <Link to={'/'}><h2>PRODUTOS</h2></Link>
            <div className="carrinho">
             <Link to={'/carrinho'}><button>Carrinho</button></Link> 
              <span></span>
            </div>
          </nav>   
        </header>           
      </div>
      <Routes/>     
    </Router>
  );
}

export default App;

