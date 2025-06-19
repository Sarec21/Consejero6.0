import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function PresentationScreen() {
  const { t } = useTranslation()
  const king = useGameState((state) => state.king)

  const continueToGame = () => {
    useGameState.getState().updateVariable('currentScreen', 'turn')
  }

  return (
    <main className="presentation-screen">
      <h2 className="title">{t('presentation_title')}</h2>
      {king ? (
        <div className="king-info">
          <p>
            <strong>King:</strong> {king.name} {king.nickname}
          </p>
          <p>Personality: {king.personality}</p>
          <p>Description: {king.description}</p>
        </div>
      ) : (
        <div className="king-info">Loading king...</div>
      )}
      <div className="kingdom-info">
        <p>Context: A realm marked by betrayal and plague.</p>
      </div>
      <button onClick={continueToGame}>{t('continue')}</button>
    </main>
  )
}
