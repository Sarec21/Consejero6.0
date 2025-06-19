import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function PresentationScreen() {
  const { t } = useTranslation()
  const kingdom = useGameState((state) => state.kingdom)

  const continueToGame = () => {
    useGameState.getState().updateVariable('currentScreen', 'turn')
  }

  return (
    <main className="presentation-screen">
      <h2 className="title">{t('presentation_title')}</h2>
      <div className="king-info">
        <p><strong>Ulric</strong>, the Raven</p>
        <p>Personality: paranoid and meticulous</p>
        <p>Throne: A dark hall lit by torches, tapestries worn by time.</p>
        <p>Quote: "I warn you: I do not tolerate failure."</p>
      </div>
      {kingdom ? (
        <div className="kingdom-info">
          <p>
            <strong>Kingdom:</strong> {kingdom.name}
          </p>
          <p>
            <strong>Climate:</strong> {kingdom.climate}
          </p>
          <p>
            <strong>Religion:</strong> {kingdom.religion}
          </p>
          <p>
            <strong>Culture:</strong> {kingdom.culture}
          </p>
          <p>
            <strong>Dominant Class:</strong> {kingdom.dominant_class}
          </p>
          <p>
            <strong>Political System:</strong> {kingdom.political_system}
          </p>
          <p>
            <strong>Current Crisis:</strong> {kingdom.current_crisis}
          </p>
          <p>
            <strong>Tags:</strong> {kingdom.tags.join(', ')}
          </p>
        </div>
      ) : (
        <p>Loading kingdom...</p>
      )}
      <button onClick={continueToGame}>{t('continue')}</button>
    </main>
  )
}
