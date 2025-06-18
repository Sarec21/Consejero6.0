import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGameState } from '../state/gameState'
import { sendAdviceToGPT } from '../lib/sendAdviceToGPT'

export default function TurnScreen() {
  const { t } = useTranslation()
  const [advice, setAdvice] = useState('')

  const handleSubmit = async () => {
    if (!advice.trim()) return
    const state = useGameState.getState()
    state.setCurrentAdvice(advice.trim())
    await sendAdviceToGPT(advice.trim())
  }

  return (
    <main className="turn-screen">
      <h2 className="title">{t('your_advice_title')}</h2>
      <section className="dilemma-block">
        <h3 className="dilemma-title">A nobleman accuses the tax collector of corruption</h3>
        <p className="dilemma-text">The nobleman has presented evidence. The tax collector denies all.</p>
      </section>
      <section className="advice-block">
        <h4>{t('your_advice_label')}</h4>
        <textarea
          value={advice}
          onChange={(e) => setAdvice(e.target.value)}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto'
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
          }}
          placeholder="Write your advice to the King here..."
        />
      </section>
      <section className="submit-block">
        <button onClick={handleSubmit}>{t('send_advice')}</button>
      </section>
    </main>
  )
}
