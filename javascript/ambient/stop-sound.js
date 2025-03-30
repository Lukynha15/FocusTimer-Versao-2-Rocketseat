import { Cafeteria, chuva, floresta, lareira } from './sounds.js';

export const stopAllSounds = () => {
  lareira.pause()
  floresta.pause()
  Cafeteria.pause()
  chuva.pause()

  lareira.currentTime = 0
  floresta.currentTime = 0
  Cafeteria.currentTime = 0
  chuva.currentTime = 0
}