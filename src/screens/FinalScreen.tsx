import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'

export default function FinalScreen() {
  const { t } = useTranslation()
  const finalResult = useGameState((state) => state.finalResult)
  const resetGame = useGameState((state) => state.resetGame)

  if (!finalResult) return null

  const handlePlayAgain = () => {
    resetGame()
  }

  return (
    <main className="final-screen">
      <h1 className="title mb-2">{t('final_title')}</h1>
      <p className="mb-4">{t('final_description')}</p>
      <h2 className="ending-title mb-2">{finalResult.title}</h2>
      <p className="mb-6 max-w-xl">{finalResult.description}</p>

      {finalResult.card && (
        <div className="reward-box">
          <h3 className="font-bold mb-1">{t('card_unlocked')}</h3>
          <p className="font-semibold">
            {finalResult.card.name} - {finalResult.card.rarity}
          </p>
          <p>{finalResult.card.description}</p>
        </div>
      )}

      {finalResult.achievement && (
        <div className="reward-box">
          <h3 className="font-bold mb-1">{t('achievement_unlocked')}</h3>
          <p className="font-semibold">{finalResult.achievement.name}</p>
          <p>{finalResult.achievement.description}</p>
        </div>
      )}

      <button onClick={handlePlayAgain}>{t('play_again')}</button>
    </main>
  )
}
