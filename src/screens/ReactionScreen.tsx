import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function ReactionScreen() {
  const { t } = useTranslation()
  const update = useGameState((state) => state.updateVariable)

  const handleContinue = () => {
    update('currentScreen', 'turn')
  }

  return (
    <main className="reaction-screen">
      <h2 className="title">{t('king_reaction_title')}</h2>

      <div className="card">
        <p className="emotion-text">😐 {t('king_emotion_placeholder')}</p>
        <p className="reaction-text">{t('king_reaction_paragraph')}</p>
      </div>

      <button onClick={handleContinue}>{t('continue')}</button>
    </main>
  )
}
