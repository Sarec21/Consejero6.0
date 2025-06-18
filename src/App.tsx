import StartScreen from './screens/StartScreen'
import LevelSelectScreen from './screens/LevelSelectScreen'
import PresentationScreen from './screens/PresentationScreen'
import TurnScreen from './screens/TurnScreen'
import ReactionScreen from './screens/ReactionScreen'
import FinalScreen from './screens/FinalScreen'
import ProfileScreen from './screens/ProfileScreen'
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

  if (currentScreen === 'turn') {
    return <TurnScreen />
  }

  if (currentScreen === 'reaction') {
    return <ReactionScreen />
  }

  if (currentScreen === 'profile') {
    return <ProfileScreen />
  }

  if (currentScreen === 'final') {
    return <FinalScreen />
  }

  return null
}

export default App
