import StartScreen from './screens/StartScreen'
import LevelSelectScreen from './screens/LevelSelectScreen'
import PresentationScreen from './screens/PresentationScreen'
import TurnScreen from './screens/TurnScreen'
import ReactionScreen from './screens/ReactionScreen'
import FinalScreen from './screens/FinalScreen'
import ProfileScreen from './screens/ProfileScreen'
import PauseMenu from './screens/PauseMenu'
import { useGameState } from './state/gameState'
import type { ReactElement } from 'react'

function App() {
  const currentScreen = useGameState((state) => state.currentScreen)

  let screen: ReactElement | null = null

  if (currentScreen === 'start') {
    screen = <StartScreen />
  } else if (currentScreen === 'levelSelect') {
    screen = <LevelSelectScreen />
  } else if (currentScreen === 'presentation') {
    screen = <PresentationScreen />
  } else if (currentScreen === 'turn') {
    screen = <TurnScreen />
  } else if (currentScreen === 'reaction') {
    screen = <ReactionScreen />
  } else if (currentScreen === 'profile') {
    screen = <ProfileScreen />
  } else if (currentScreen === 'final') {
    screen = <FinalScreen />
  }

  return (
    <>
      {screen}
      <PauseMenu />
    </>
  )
}

export default App
