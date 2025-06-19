export interface King {
  id: string
  name: string
  nickname: string
  personality: 'ruthless' | 'just' | 'cowardly' | 'wise' | 'paranoid'
  description: string
  defaultRealmId: string
}

export const KINGS: King[] = [
  {
    id: 'aldric_just',
    name: 'Aldric',
    nickname: 'the Just',
    personality: 'just',
    description: 'A fair ruler committed to balance and moral duty.',
    defaultRealmId: 'eldoria'
  },
  {
    id: 'malgar_ruthless',
    name: 'Malgar',
    nickname: 'the Iron Fist',
    personality: 'ruthless',
    description: 'Rules through fear and unquestioned power.',
    defaultRealmId: 'gravenrock'
  }
]
