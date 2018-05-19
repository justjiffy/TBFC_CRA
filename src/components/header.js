import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'
import hamburger from '../images/hamburger.svg'

export default class Header extends React.Component {
  render() {
    const eventSub = [
      ["Contest Info", "#"],
      ["Event Info", "#"],
      ["Free Concerts", "#"]
    ]

    const contestSub = [
      ["Contest Rules", "#"],
      ["Registration", "#"],
      ["Winners", '#']
    ]

    const vendorSub = [
      ["Featured Vendors", "#"],
      ["Application", "#"],
      ["FAQ", "#"]
    ]

    const volunteerSub = [
      ["Sign up!", "#"],
      ["FAQ", "#"]
    ]
    const enter = (menu) => this.props.showSub(menu)

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
          <ul id="nav" onMouseLeave={() => enter(null)} >
            <li onMouseEnter={() => enter('eventMenu')}>
              <Link to="/event" id="eventMenu">EVENT INFO</Link>
              { this.props.target === "eventMenu" ? <SubMenu display={eventSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('contestMenu')}>
              <Link to="/contest">CONTESTANTS</Link>
              { this.props.target === "contestMenu" ? <SubMenu display={contestSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('vendorMenu')}>
              <Link to="/vendor">VENDORS</Link>
              { this.props.target === "vendorMenu" ? <SubMenu display={vendorSub} /> : null }
            </li>
            <li onMouseEnter={() => enter('volunteerMenu')}>
              <Link to="/volunteer">VOLUNTEERS</Link>
              { this.props.target === 'volunteerMenu' ? <SubMenu display={volunteerSub} /> : null }
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
