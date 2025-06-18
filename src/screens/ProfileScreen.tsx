import { useTranslation } from 'react-i18next'

export default function ProfileScreen() {
  const { t } = useTranslation()

  return (
    <main className="profile-screen">
      <h2 className="title">{t('profile_title')}</h2>
      <p>{t('profile_placeholder')}</p>
    </main>
  )
}
