import type { FC } from 'react'

export interface King {
  name: string
  nickname: string
  personality: string
  description: string
  quote: string
}

interface Props {
  king?: Partial<King> | null
}

const KingPresentation: FC<Props> = ({ king }) => {
  if (!king) {
    return <div className="king-info">Loading king...</div>
  }

  return (
    <div className="king-info">
      <p>
        <strong>{king.name ?? 'Unknown'}</strong>
        {king.nickname ? `, ${king.nickname}` : ''}
      </p>
      <p>Personality: {king.personality ?? 'Unknown'}</p>
      <p>Throne: {king.description ?? 'No description available.'}</p>
      <p>Quote: {king.quote ?? '...'}</p>
    </div>
  )
}

export default KingPresentation
