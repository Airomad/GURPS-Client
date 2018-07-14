import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import LoginScreen from './LoginScreen';
import GameScreen from './GameScreen';

injectGlobal`
    @font-face {
        font-family: 'Roboto';
        src: url('../fonts/Roboto-Regular.ttf');
    }

    html {
        font-family: 'Roboto';
    }
`;

export default class App extends Component {
  checkLogin = () => {
    if (false) {
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/game" />;
    }
  }

  render() {
    return (
      <div>
        { this.checkLogin() }

        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/game' component={GameScreen} />
        </Switch>
      </div>
    );
  }
}
