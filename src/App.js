import React, { Component } from 'react';
import Navbar from './components/Navbar'
import AboutMePage from './containers/AboutMePage'
import ConactMePage from './containers/ContactMePage'
import PortfolioPage from './containers/PortfolioPage'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/AboutMe" component={AboutMePage} />
          <Route exact path="/ContactMe" component={ConactMePage} />
          <Route exact path="/Portfolio" component={PortfolioPage} />
          <Route exact path="*" render={() =>  <Redirect to="/AboutMe" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
