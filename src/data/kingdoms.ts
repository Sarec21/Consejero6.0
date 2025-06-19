export interface Kingdom {
  id: string
  name: string
  climate: string
  religion: string
  culture: string
  tags: string[]
  levels_available: string[]
  recommended_kings: string[]
  narrative_tags: string[]
  happiness: number
  wealth: number
  food: number
  army: number
  prestige: number
  war: boolean
}

export const KINGDOMS: Kingdom[] = [
  {
    id: 'moral_decay',
    name: 'Deteria',
    climate: 'temperate',
    religion: 'secular',
    culture: 'decadent',
    tags: ['corruption', 'decay'],
    levels_available: ['village', 'governor'],
    recommended_kings: ['aldric_just'],
    narrative_tags: ['moral_decay'],
    happiness: 35,
    wealth: 45,
    food: 50,
    army: 30,
    prestige: 10,
    war: false
  },
  {
    id: 'rise_of_war',
    name: 'Stormgard',
    climate: 'cold',
    religion: 'war gods',
    culture: 'militaristic',
    tags: ['conquest', 'battle'],
    levels_available: ['royal'],
    recommended_kings: ['malgar_ruthless'],
    narrative_tags: ['rise_of_war'],
    happiness: 40,
    wealth: 60,
    food: 45,
    army: 70,
    prestige: 20,
    war: true
  },
  {
    id: 'eldoria',
    name: 'Eldoria',
    climate: 'mild',
    religion: 'pantheon',
    culture: 'honorable',
    tags: ['justice'],
    levels_available: ['village', 'governor', 'royal'],
    recommended_kings: ['aldric_just'],
    narrative_tags: ['honor', 'justice'],
    happiness: 50,
    wealth: 50,
    food: 50,
    army: 50,
    prestige: 0,
    war: false
  },
  {
    id: 'gravenrock',
    name: 'Gravenrock',
    climate: 'rocky',
    religion: 'forge cult',
    culture: 'warlike',
    tags: ['iron', 'blood'],
    levels_available: ['governor', 'royal'],
    recommended_kings: ['malgar_ruthless'],
    narrative_tags: ['war', 'iron'],
    happiness: 45,
    wealth: 55,
    food: 40,
    army: 60,
    prestige: 15,
    war: true
  },
  {
    id: 'mystral',
    name: 'Mystral',
    climate: 'arid',
    religion: 'mystic',
    culture: 'arcane',
    tags: ['mystery'],
    levels_available: ['mythical', 'oracle'],
    recommended_kings: [],
    narrative_tags: ['arcane', 'mystery'],
    happiness: 55,
    wealth: 40,
    food: 35,
    army: 30,
    prestige: 25,
    war: false
  }
]
