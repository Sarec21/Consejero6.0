import StartScreen from './screens/StartScreen'
import LevelSelectScreen from './screens/LevelSelectScreen'
import PresentationScreen from './screens/PresentationScreen'
import { useGameState } from './state/gameState'

function App() {
  const currentScreen = useGameState((state) => state.currentScreen)

  if (currentScreen === 'start') {
    return <StartScreen />
  }

  if (currentScreen === 'levelSelect') {
    return <LevelSelectScreen />
  }

  if (currentScreen === 'presentation') {
    return <PresentationScreen />
  }

  return null
}

export default App
