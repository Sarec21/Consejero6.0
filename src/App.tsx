import StartScreen from './screens/StartScreen'
import { useGameState } from './state/gameState'

function App() {
  const currentScreen = useGameState((state) => state.currentScreen)

  if (currentScreen === 'start') {
    return <StartScreen />
  }

  return null
}

export default App
