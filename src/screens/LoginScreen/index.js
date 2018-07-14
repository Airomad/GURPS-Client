import React, { Component } from 'react';
import { connect } from 'react-redux';

import { gameWorldConnect, screenChange } from 'actions/app';

import LoginScreen from './LoginScreen';


class LoginScreenContainer extends Component {
  login = (worldNumber, nickname) => {
    this.props.onScreenChange('enterPassword');
  }

  createWorld = () => {
    this.props.onScreenChange('createWorld');
  }

  render() {
    const { onGameWorldConnect, onScreenChange } = this.props;

    return (
      <LoginScreen
        onLogin={this.login}
        onCreateWorld={this.createWorld}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    gameWorld: state.app.gameWorld
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onGameWorldConnect: (gameWorld) => dispatch(gameWorldConnect(gameWorld)),
    onScreenChange: (screen) => dispatch(screenChange(screen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);
