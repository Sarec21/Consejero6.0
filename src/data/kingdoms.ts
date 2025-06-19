export interface Kingdom {
  id: string
  name: string
  climate: string
  religion: string
  culture: string
  dominant_class: string
  political_system: string
  current_crisis: string
  tags: string[]
}

export const KINGDOMS: Kingdom[] = [
  {
    id: 'eldoria',
    name: 'Eldoria',
    climate: 'templado',
    religion: 'culto a la Dama del Río',
    culture: 'honor y tradición',
    dominant_class: 'nobleza rural',
    political_system: 'monarquía parlamentaria',
    current_crisis: 'decadencia moral y pérdida de fe',
    tags: ['decadente', 'espiritual', 'conservador']
  },
  {
    id: 'gravenrock',
    name: 'Gravenrock',
    climate: 'frío y montañoso',
    religion: 'culto al dios del hierro',
    culture: 'militarista y expansionista',
    dominant_class: 'casta militar',
    political_system: 'dictadura hereditaria',
    current_crisis: 'expansión excesiva y tensiones internas',
    tags: ['bélico', 'opresivo', 'orgulloso']
  }
]
