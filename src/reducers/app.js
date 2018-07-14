import {
  SCREEN_CHANGE,
  GAME_WORLD_CONNECT
} from 'constants/app'

const INITIAL_STATE = {
  screen: 'login',
  isLoading: false,
  gameWorld: undefined
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCREEN_CHANGE:
      return {
        ...state,
        screen: action.screen,
      };
    case GAME_WORLD_CONNECT:
      return {
        ...state,
        gameWorld: action.gameWorld
      };

    default:
      return state;
  }
}
