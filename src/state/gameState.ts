import { create } from 'zustand'

export interface GameState {
  kingdom: {
    happiness: number
    wealth: number
    food: number
    army: number
    prestige: number
    war: boolean
  }
  advisor: {
    trust: number
    reputation: number
  }
  currentScreen: string
  selectedLevel: string
  narrativeMemory: string[]
  currentAdvice: string
  finalResult?: {
    title: string
    description: string
    card?: { name: string; rarity: string; description: string }
    achievement?: { name: string; description: string }
  }
  setCurrentAdvice: (advice: string) => void
  updateVariable: (path: string, value: unknown) => void
  resetGame: () => void
}

const initialState = {
  kingdom: {
    happiness: 50,
    wealth: 50,
    food: 50,
    army: 50,
    prestige: 0,
    war: false,
  },
  advisor: {
    trust: 50,
    reputation: 50,
  },
  currentScreen: 'start',
  selectedLevel: '',
  narrativeMemory: [] as string[],
  currentAdvice: '',
  finalResult: undefined,
}

export const useGameState = create<GameState>((set) => ({
  ...initialState,
  updateVariable: (path, value) =>
    set((state) => {
      const keys = path.split('.')
      let obj: Record<string, unknown> = state as unknown as Record<string, unknown>
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]] as Record<string, unknown>
      }
      obj[keys[keys.length - 1]] = value
      return { ...state }
    }),
  resetGame: () => set(initialState),
  setCurrentAdvice: (advice) => set({ currentAdvice: advice }),
}))

export interface MainPlot {
  id: string
  level: string
  initialState: {
    kingdom: Record<string, unknown>
    advisor: Record<string, unknown>
  }
}

export const gameState = {
  level: '',
  king: null as Record<string, unknown> | null,
  kingdom: null as Record<string, unknown> | null,
  advisor: null as Record<string, unknown> | null,
  mainPlotId: '',
  turn: 1,
  decisions: [] as unknown[],
  reactions: [] as unknown[],
  final: null as Record<string, unknown> | null,
}

export function initializeGameWithPlot(plot: MainPlot) {
  gameState.level = plot.level
  gameState.mainPlotId = plot.id
  gameState.king = null
  gameState.kingdom = plot.initialState.kingdom
  gameState.advisor = plot.initialState.advisor
  gameState.turn = 1
  gameState.decisions = []
  gameState.reactions = []
  gameState.final = null
}
