import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './header'
import Footer from './footer'
import Home from '../home'
import EventInfo from '../event'
import Contest from '../contest'
import Vendor from '../vendor'
import Volunteer from '../volunteer'
import Contact from '../contact'

import '../../App.css';

const App = props => (
  <div className="container">
    <Header toggler={props.screenWidth}/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/event" component={EventInfo} />
      <Route exact path="/contest" component={Contest} />
      <Route exact path="/vendor" component={Vendor} />
      <Route exact path="/volunteer" component={Volunteer} />
      <Route exact path="/contact" component={Contact} />
    </main>
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  screenWidth: state.nav.screenWidth
})

export default connect(
  mapStateToProps
)(App)
