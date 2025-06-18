import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function PresentationScreen() {
  const { t } = useTranslation()

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
      <div className="kingdom-info">
        <p>Context: A realm marked by betrayal and plague.</p>
      </div>
      <button onClick={continueToGame}>{t('continue')}</button>
    </main>
  )
}
