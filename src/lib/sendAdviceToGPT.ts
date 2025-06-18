import { useGameState } from '../state/gameState'

export async function sendAdviceToGPT(advice: string): Promise<void> {
  const state = useGameState.getState()

  if (/azcona/i.test(advice)) {
    console.log('Secret word detected \u2192 going to final screen')
    state.updateVariable('finalResult', {
      title: 'Game Over',
      description: 'Your words reached the ears of Azcona. The kingdom trembles.',
      card: {
        name: 'Mark of Azcona',
        rarity: 'epic',
        description: 'A hidden mark left by ancient betrayal.'
      },
      achievement: {
        name: 'Invocation of Azcona',
        description: 'You dared to speak the forbidden name.'
      }
    })
    state.updateVariable('currentScreen', 'final')
    return
  }

  // Normal GPT logic placeholder: for now simply show reaction screen
  state.updateVariable('currentScreen', 'reaction')
}
