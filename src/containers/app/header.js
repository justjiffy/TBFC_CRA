import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'
import hamburger from '../../images/hamburger.svg'

export default class Header extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
    <header>
      <Link to="/"><img src={logo} className="App-logo" alt="TBFC" />
        <h1 className="App-title">Topanga Banjo&middot;Fiddle Festival & Contest</h1>
      </Link>
      <nav>
        { this.props.mobile ?
          <Toggler open={this.props.showNav} click={this.props.toggle} />
          : null
        }
        { this.props.showNav ?
          <ul id="nav">
            <li><Link to="/event">EVENT INFO</Link></li>
            <li><Link to="/contest">CONTESTANTS</Link></li>
            <li><Link to="/vendor">VENDORS</Link></li>
            <li><Link to="/volunteer">VOLUNTEERS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          : null
        }
      </nav>
      </header>
    )
  }
}

class Toggler extends React.Component {
  render() {
    return (
      <div>
        { this.props.open ?
          <img onClick={this.props.click} className="hamburger" src="https://image.flaticon.com/icons/svg/61/61155.svg" alt="CLOSE" />
          :
          <img onClick={this.props.click} className="hamburger" src={hamburger} alt="MENU" />
        }
      </div>
    )
  }
}
