import { useTranslation } from 'react-i18next'
import { levelOptions, selectLevel } from '../lib/levelSelectLogic'
import { useGameState } from '../state/gameState'

export default function LevelSelectScreen() {
  const { t } = useTranslation()

  const openProfile = () => {
    useGameState.getState().updateVariable('currentScreen', 'profile')
  }

  return (
    <main className="level-select-screen">
      <button className="profile-button" onClick={openProfile}>
        {t('profile_button')}
      </button>
      <h2 className="title">{t('select_level')}</h2>
      <div className="levels">
        {levelOptions.map((level) => (
          <button
            key={level.key}
            className="level-card"
            onClick={() => selectLevel(level.key)}
          >
            <h3>{t(level.nameKey)}</h3>
            <p>{t(level.descriptionKey)}</p>
          </button>
        ))}
      </div>
    </main>
  )
}
