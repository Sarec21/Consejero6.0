import { useTranslation } from 'react-i18next'
import { goToLevelSelect } from '../lib/startLogic'

export default function StartScreen() {
  const { t } = useTranslation()

  return (
    <main className="start-screen">
      <div className="content">
        <h1 className="title">{t('game_title')}</h1>
        <button onClick={goToLevelSelect}>{t('start_game')}</button>
      </div>
    </main>
  )
}
