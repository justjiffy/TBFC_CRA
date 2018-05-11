import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import logo from '../../logo.svg'

import '../../App.css';

const App = () => (
  <div>
    <header>
      <Link to="/"><img src={logo} className="App-logo" alt="TBFC" /></Link>
      <h1 className="App-title">Topanga Banjo&middot;Fiddle Festival & Contest</h1>
    </header>
    <nav>
      <ul>
        <li>EVENT</li>
        <li>CONTESTANTS</li>
        <li>VENDORS</li>
        <li>VOLUNTEERS</li>
        <li>STORE</li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
    <footer>
      Topanga Banjo&middot;Fiddle Contest and Folk Festival, Inc.
    </footer>
  </div>
)

export default App;
