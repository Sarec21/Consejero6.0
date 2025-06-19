import { useGameState, initializeGameWithPlot } from '../state/gameState'
import { plots } from '../data/plots'

export interface LevelOption {
  key: string
  nameKey: string
  descriptionKey: string
}

export const levelOptions: LevelOption[] = [
  { key: 'village', nameKey: 'level_village', descriptionKey: 'level_village_description' },
  { key: 'governor', nameKey: 'level_governor', descriptionKey: 'level_governor_description' },
  { key: 'royal', nameKey: 'level_royal', descriptionKey: 'level_royal_description' },
  { key: 'mythical', nameKey: 'level_mythical', descriptionKey: 'level_mythical_description' },
  { key: 'oracle', nameKey: 'level_oracle', descriptionKey: 'level_oracle_description' },
]

export function selectLevel(level: string) {
  const state = useGameState.getState()
  state.updateVariable('selectedLevel', level)

  const plot = plots.find((p) => p.level === level)
  if (plot) {
    initializeGameWithPlot(plot)
  }

  state.updateVariable('currentScreen', 'presentation')
}
