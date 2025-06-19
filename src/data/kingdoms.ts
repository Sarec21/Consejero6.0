export interface Kingdom {
  id: string
  name: string
  levels_available: string[]
  recommended_kings: string[]
  narrative_tags: string[]
}

export const KINGDOMS: Kingdom[] = [
  {
    id: 'eldoria',
    name: 'Eldoria',
    levels_available: ['village', 'governor', 'royal'],
    recommended_kings: ['aldric_just'],
    narrative_tags: ['honor', 'justice']
  },
  {
    id: 'gravenrock',
    name: 'Gravenrock',
    levels_available: ['governor', 'royal'],
    recommended_kings: ['malgar_ruthless'],
    narrative_tags: ['war', 'iron']
  },
  {
    id: 'mystral',
    name: 'Mystral',
    levels_available: ['mythical', 'oracle'],
    recommended_kings: [],
    narrative_tags: ['arcane', 'mystery']
  }
]
