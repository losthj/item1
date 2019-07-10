import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomeRouter from './home';
import AccountRouter from './account';
import EventRouter from './event';
import MallRouter from './mall';


export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/**账户中心**/}
          <Route path='/account' render = { props => AccountRouter }/>

          {/**金币商城**/}
          <Route path='/mall' render = { props => MallRouter }/>

          {/**活动**/}
          <Route path='/event' render = { props => EventRouter }/>
          <Redirect exact from="/event/index" to="/event" />
          {/**home**/}
          <HomeRouter />
        </Switch>
      </Router>
    )
  }
}
