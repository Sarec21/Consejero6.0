import { useTranslation } from 'react-i18next'
import { levelOptions, selectLevel } from '../lib/levelSelectLogic'

export default function LevelSelectScreen() {
  const { t } = useTranslation()

  return (
    <main className="level-select-screen">
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
