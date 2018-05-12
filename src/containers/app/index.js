import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import EventInfo from '../event'
import Contest from '../contest'
import Vendor from '../vendor'
import Volunteer from '../volunteer'
import Contact from '../contact'

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
        <li><Link to="/event">EVENT INFO</Link></li>
        <li><Link to="/contest">CONTESTANTS</Link></li>
        <li><Link to="/vendor">VENDORS</Link></li>
        <li><Link to="/volunteer">VOLUNTEERS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/event" component={EventInfo} />
      <Route exact path="/contest" component={Contest} />
      <Route exact path="/vendor" component={Vendor} />
      <Route exact path="/volunteer" component={Volunteer} />
      <Route exact path="/contact" component={Contact} />
    </main>
    <footer>
      Topanga Banjo&middot;Fiddle Contest and Folk Festival, Inc.
    </footer>
  </div>
)

export default App;
