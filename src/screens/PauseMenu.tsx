import { useState } from 'react'
import { useGameState } from '../state/gameState'

export default function PauseMenu() {
  const currentScreen = useGameState((state) => state.currentScreen)
  const update = useGameState((state) => state.updateVariable)
  const gameState = useGameState((state) => state)
  const [isOpen, setIsOpen] = useState(false)

  if (currentScreen === 'start' || currentScreen === 'profile') {
    return null
  }

  const toggleMenu = () => setIsOpen((v) => !v)

  return (
    <>
      <button className="pause-button" onClick={toggleMenu}>
        ⚙️
      </button>
      <aside className={`pause-menu${isOpen ? ' open' : ''}`}>
        <h2 className="title">Pause Menu</h2>
        <div className="options">
          <button
            onClick={() => {
              setIsOpen(false)
              update('currentScreen', 'start')
            }}
          >
            Main Menu
          </button>
          <button
            onClick={() => {
              setIsOpen(false)
              update('currentScreen', 'profile')
            }}
          >
            Profile
          </button>
          <div className="debug-block">
            <h3>Debug</h3>
            <ul>
              <li>Happiness: {gameState.kingdom.happiness}</li>
              <li>Wealth: {gameState.kingdom.wealth}</li>
              <li>Food: {gameState.kingdom.food}</li>
              <li>Army: {gameState.kingdom.army}</li>
              <li>Prestige: {gameState.kingdom.prestige}</li>
              <li>War: {gameState.kingdom.war ? 'Yes' : 'No'}</li>
              <li>Advisor Trust: {gameState.advisor.trust}</li>
              <li>Advisor Reputation: {gameState.advisor.reputation}</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}
