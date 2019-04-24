import React, { Component } from 'react';
import Navbar from './components/navbar'
import aboutMePage from './containers/aboutMePage'
import conactMePage from './containers/contactMePage'
import portfolioPage from './containers/portfolioPage'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/AboutMe" component={aboutMePage} />
          <Route exact path="/ContactMe" component={conactMePage} />
          <Route exact path="/Portfolio" component={portfolioPage} />

          <Route exact path="*" render={() =>  <Redirect to="/AboutMe" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
