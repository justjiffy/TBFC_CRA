import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'
import hamburger from '../../images/hamburger.svg'

import { toggleNav } from '../../modules/nav'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
    <header>
      <Link to="/"><img src={logo} className="App-logo" alt="TBFC" />
        <h1 className="App-title">Topanga Banjo&middot;Fiddle Festival & Contest</h1>
      </Link>
      <nav>
        { this.props.toggler < 786 ?
        <img className="hamburger" src={hamburger} alt="MENU" />
        : null
        }
        <ul id="nav">
          <li><Link to="/event">EVENT INFO</Link></li>
          <li><Link to="/contest">CONTESTANTS</Link></li>
          <li><Link to="/vendor">VENDORS</Link></li>
          <li><Link to="/volunteer">VOLUNTEERS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      </header>
    )
  }
}
