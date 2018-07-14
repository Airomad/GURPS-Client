import {
  SCREEN_CHANGE,
  GAME_WORLD_CONNECT
} from 'constants/app';

export function screenChange(screen) {
  return {
    type: SCREEN_CHANGE,
    screen
  }
}

export function gameWorldConnect(gameWorld) {
  return {
    type: GAME_WORLD_CONNECT,
    gameWorld
  }
}
