import { KINGS, type King } from '../data/kings'
import { KINGDOMS, type Kingdom } from '../data/kingdoms'

export function selectKingForPlot(plotId: string): King {
  if (plotId === 'moral_decay') return KINGS.find(k => k.id === 'aldric_just') || KINGS[0]
  if (plotId === 'rise_of_war') return KINGS.find(k => k.id === 'malgar_ruthless') || KINGS[0]
  return KINGS[0]
}

export function selectKingdomAndKingForLevel(level: string): { kingdom: Kingdom; king: King } {
  const availableKingdoms = KINGDOMS.filter(k => k.levels_available.includes(level))
  const kingdom =
    availableKingdoms[Math.floor(Math.random() * availableKingdoms.length)] || KINGDOMS[0]

  const recommendedKings = KINGS.filter(k => kingdom.recommended_kings.includes(k.id))
  let king = recommendedKings[Math.floor(Math.random() * recommendedKings.length)]

  if (!king) {
    king = KINGS.find(k => k.defaultRealmId === kingdom.id) || KINGS[0]
  }

  return { kingdom, king }
}
