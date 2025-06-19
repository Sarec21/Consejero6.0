import type { FC } from 'react'

interface Props {
  context?: string | null
}

const KingdomPresentation: FC<Props> = ({ context }) => {
  if (!context) {
    return <div className="kingdom-info">Loading context...</div>
  }

  return (
    <div className="kingdom-info">
      <p>{context}</p>
    </div>
  )
}

export default KingdomPresentation
