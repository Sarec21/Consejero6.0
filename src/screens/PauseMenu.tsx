import { useState } from 'react'
import { useGameState } from '../state/gameState'

declare const process: { env: Record<string, string | undefined> }

export default function PauseMenu() {
  const update = useGameState((state) => state.updateVariable)
  const gameState = useGameState((state) => state)
  const [showDebug, setShowDebug] = useState(
    process.env.DEBUG_MODE === 'true' || import.meta.env.DEBUG_MODE === 'true'
  )

  return (
    <main className="pause-menu">
      <h2 className="title">Pause Menu</h2>
      <div className="options">
        <button onClick={() => update('currentScreen', 'start')}>
          Return to Main Menu
        </button>
        <button onClick={() => update('currentScreen', 'profile')}>
          View Profile
        </button>
        <button onClick={() => setShowDebug((v) => !v)}>
          View Current Variables
        </button>
        {showDebug && (
          <pre className="debug-block">
            {JSON.stringify(gameState, null, 2)}
          </pre>
        )}
      </div>
    </main>
  )
}
