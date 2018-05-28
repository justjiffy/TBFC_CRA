import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'
import hamburger from '../images/hamburger.svg'

export default class Header extends React.Component {
  render() {
    const enter = (menu) => this.props.showSubMenu(menu)
    return (
    <header>
      <Link to="/"><img src={logo} className="App-logo" alt="TBFC" />
        <h1 className="App-title">Topanga Banjo&middot;Fiddle Festival & Contest</h1>
      </Link>
      <nav>
        { this.props.mobile ?
          <Toggler open={this.props.nav.showNav} click={this.props.nav.toggleNav} />
          : null
        }
        { this.props.nav.showNav ?
          <ul id="nav" onMouseLeave={() => enter(null)} >
            <li onMouseEnter={() => enter('eventSub')}>
              <Link to="/event" id="eventSub">EVENT INFO</Link>
              { this.props.nav.target === "eventSub" ? <SubMenu display={this.props.nav.eventSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('contestSub')}>
              <Link to="/contest">CONTESTANTS</Link>
              { this.props.nav.target === "contestSub" ? <SubMenu display={this.props.nav.contestSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('vendorSub')}>
              <Link to="/vendor">VENDORS</Link>
              { this.props.nav.target === "vendorSub" ? <SubMenu display={this.props.nav.vendorSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('volunteerSub')}>
              <Link to="/volunteer">VOLUNTEERS</Link>
              { this.props.nav.target === 'volunteerSub' ? <SubMenu display={this.props.nav.volunteerSub} /> : null }
            </li>
            <li onMouseEnter={()=> enter(null)}><Link to="/contact">CONTACT</Link>
            </li>
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

class SubMenu extends React.Component {
   render() {
     const listItems = this.props.display.map(
       (item, index) => <li key={index}><Link to={item[1]}>{item[0]}</Link></li>
     )
     return (
       <ul className="submenu">
        {listItems}
       </ul>
     )
   }
 }
