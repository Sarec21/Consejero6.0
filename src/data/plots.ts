import type { MainPlot } from '../state/gameState'

export const plots: MainPlot[] = [
  {
    id: 'dark_lineage',
    level: 'royal',
    initialState: {
      kingdom: {
        happiness: 30,
        wealth: 40,
        food: 35,
        army: 45,
        prestige: 25,
        war: false,
      },
      advisor: {
        trust: 40,
        reputation: 50,
      },
    },
  },
]
