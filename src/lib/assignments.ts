import { KINGS, type King } from '../data/kings'

export function selectKingForPlot(plotId: string): King {
  if (plotId === 'moral_decay') return KINGS.find(k => k.id === 'aldric_just') || KINGS[0]
  if (plotId === 'rise_of_war') return KINGS.find(k => k.id === 'malgar_ruthless') || KINGS[0]
  return KINGS[0]
}
