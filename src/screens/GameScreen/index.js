import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameScreen from './GameScreen';


class GameScreenContainer extends Component {
  render() {
    const { match, location } = this.props;

    return (
      <GameScreen />
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
    //onScreenOrientationChange: (orientation) => dispatch(screenOrientationChange(orientation)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenContainer);
