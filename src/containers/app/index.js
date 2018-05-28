import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, withRouter} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from '../home'
import EventInfo from '../event'
import Contest from '../contest'
import Vendor from '../vendor'
import Volunteer from '../volunteer'
import Contact from '../contact'

import {
  toggleNav,
  showSubMenu
} from '../../modules/nav'

import '../../App.css';


const App = props => (
  <div className="container">
    <BrowserRouter>
      <div>
      <Header {...props} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/event" component={EventInfo} />
        <Route exact path="/contest" component={Contest} />
        <Route exact path="/vendor" component={Vendor} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/contact" component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
      </div>
    </BrowserRouter>
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  nav: state.nav
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNav,
  showSubMenu
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
