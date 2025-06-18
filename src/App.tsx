import StartScreen from './screens/StartScreen'
import LevelSelectScreen from './screens/LevelSelectScreen'
import { useGameState } from './state/gameState'

function App() {
  const currentScreen = useGameState((state) => state.currentScreen)

  if (currentScreen === 'start') {
    return <StartScreen />
  }

  if (currentScreen === 'levelSelect') {
    return <LevelSelectScreen />
  }

  return null
}

export default App
