import { useGameState } from '../state/gameState'

export function goToLevelSelect() {
  useGameState.getState().updateVariable('currentScreen', 'levelSelect')
}
