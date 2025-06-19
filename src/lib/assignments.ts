import { KINGS, type King } from '../data/kings'
import { KINGDOMS, type Kingdom } from '../data/kingdoms'

export function selectKingForPlot(plotId: string): King {
  if (plotId === 'moral_decay') return KINGS.find(k => k.id === 'aldric_just') || KINGS[0]
  if (plotId === 'rise_of_war') return KINGS.find(k => k.id === 'malgar_ruthless') || KINGS[0]
  return KINGS[0]
}

export function selectKingdomForPlot(plotId: string): Kingdom {
  if (plotId === 'moral_decay') return KINGDOMS.find(k => k.id === 'eldoria') || KINGDOMS[0]
  if (plotId === 'rise_of_war') return KINGDOMS.find(k => k.id === 'gravenrock') || KINGDOMS[0]
  return KINGDOMS[0]
}
