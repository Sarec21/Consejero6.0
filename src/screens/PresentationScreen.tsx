import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'
import KingPresentation from '../components/KingPresentation'
import KingdomPresentation from '../components/KingdomPresentation'

export default function PresentationScreen() {
  const { t } = useTranslation()
  const king = useGameState((state) => state.king)
  const kingdom = useGameState((state) => state.kingdom)

  const sampleKing = {
    name: 'Ulric',
    nickname: 'the Raven',
    personality: 'paranoid and meticulous',
    description: 'A dark hall lit by torches, tapestries worn by time.',
    quote: 'I warn you: I do not tolerate failure.'
  }

  const continueToGame = () => {
    useGameState.getState().updateVariable('currentScreen', 'turn')
  }

  return (
    <main className="presentation-screen">
      <h2 className="title">{t('presentation_title')}</h2>
      <KingPresentation king={king} />
      <KingdomPresentation context="A realm marked by betrayal and plague." />
      <KingPresentation king={sampleKing} />
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
