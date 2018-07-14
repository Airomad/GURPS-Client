import React, { Component } from 'react';
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components';

import { screenChange } from 'actions/app';

import LoadingScreen from 'screens/LoadingScreen';
import LoginScreen from 'screens/LoginScreen';
import GameScreen from 'screens/GameScreen';
import WorldCreateScreen from 'screens/WorldCreateScreen';
import EnterPasswordScreen from 'screens/EnterPasswordScreen';


injectGlobal`
    @font-face {
        font-family: 'Roboto';
        src: url('../fonts/Roboto-Regular.ttf');
    }

    html {
        font-family: 'Roboto';
    }
`;

class AppScreen extends Component {

  componentWillReceiveProps(nextProps) {
    const { screen, onScreenChange } = this.props;

    if (!nextProps.gameWorld) {
      if (screen !== 'login') {
        onScreenChange('login');
      }
    } else {
      if (screen !== 'game') {
        onScreenChange('game');
      }
    }
  }

  render() {
    const { screen, isLoading } = this.props;
    
    if (isLoading) {
      return <LoadingScreen />;
    } else {
      switch (screen) {
        case 'login': return <LoginScreen />;
        case 'createWorld': return <WorldCreateScreen />;
        case 'enterPassword': return <EnterPasswordScreen />;
        case 'game': return <GameScreen />;
        default: return null;
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    screen: state.app.screen,
    isLoading: state.app.isLoading,
    gameWorld: state.app.gameWorld
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onScreenChange: (screen) => dispatch(screenChange(screen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
