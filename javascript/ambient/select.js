import * as el from './elements.js'
import { Cafeteria, chuva, floresta, lareira } from './sounds.js';
import { stopAllSounds } from './stop-sound.js';
import { firetheme, lighttheme, rainTheme } from './theme.js';

const deselectAll = () => {
  el.fire.classList.remove('clicked')
  el.light.classList.remove('clicked')
  el.market.classList.remove('clicked')
  el.rain.classList.remove('clicked')

  el.body.classList.remove('fire', 'light', 'market', 'rain')
}

export const ambientSelected = () => {
  el.fire.addEventListener('click', function() {
    stopAllSounds()
    deselectAll()
    firetheme()
    el.fire.classList.add('clicked') 
    el.body.classList.add('fire') 
    lareira.play() 
  })

  el.light.addEventListener('click', function() {
    stopAllSounds()
    deselectAll()
    lighttheme()
    el.light.classList.add('clicked')
    el.body.classList.add('light')
    floresta.play()
  })

  el.market.addEventListener('click', function() {
    stopAllSounds()
    deselectAll()
    el.market.classList.add('clicked')
    el.body.classList.add('market')
    Cafeteria.play()
  })

  el.rain.addEventListener('click', function() {
    stopAllSounds()
    deselectAll()
    rainTheme()
    el.rain.classList.add('clicked')
    el.body.classList.add('rain')
    chuva.play()
  })
}
