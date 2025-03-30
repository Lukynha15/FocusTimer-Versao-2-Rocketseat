import { isRunning } from './actions.js';
import * as el from './elements.js'
import { endingTimer } from './ending-timer.js';
import { stopAllSounds } from '../ambient/stop-sound.js';

export const RunTimer = () => {
  if (!isRunning) return;

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--
  if (seconds < 0) {
    minutes--
    seconds = 59
  }

  if ( minutes >= 60 ) {
    minutes = 60
    seconds = 0
  }

  if (minutes <= 0) {
    endingTimer()
  }

  if (minutes < 0) {
    stopAllSounds()
    alert('O tempo do cronômetro chegou ao fim!')
    return
  }

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")

  setTimeout(RunTimer, 1000);
};