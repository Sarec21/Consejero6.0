import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function PauseMenu() {
  const { t } = useTranslation()
  const currentScreen = useGameState((s) => s.currentScreen)
  const update = useGameState((s) => s.updateVariable)
  const gameState = useGameState((s) => s)
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
        <h2 className="title">{t('pause_menu.title')}</h2>
        <div className="options">
          <button
            onClick={() => {
              setIsOpen(false)
              update('currentScreen', 'start')
            }}
          >
            {t('pause_menu.main_menu')}
          </button>
          <button
            onClick={() => {
              setIsOpen(false)
              update('currentScreen', 'profile')
            }}
          >
            {t('pause_menu.profile')}
          </button>
        </div>
        <div className="debug-block">
          <h3>{t('pause_menu.debug_title')}</h3>
          <h4>{t('pause_menu.kingdom')}</h4>
          <ul>
            <li>id: {gameState.kingdom?.id}</li>
            <li>name: {gameState.kingdom?.name}</li>
            <li>climate: {gameState.kingdom?.climate}</li>
          </ul>
          <h4>{t('pause_menu.advisor')}</h4>
          <ul>
            <li>trust: {gameState.advisor.trust}</li>
            <li>reputation: {gameState.advisor.reputation}</li>
          </ul>
        </div>
      </aside>
    </>
  )
}
