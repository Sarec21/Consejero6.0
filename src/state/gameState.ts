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
  narrativeMemory: string[]
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
  narrativeMemory: [] as string[],
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
}))
