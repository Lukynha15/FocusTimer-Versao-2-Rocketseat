import * as el from './elements.js'
import { RunTimer } from "./timer.js";

export let isRunning = false

export const play = () => {
  el.play.addEventListener('click', function() {
    if (!isRunning) {
      isRunning = true
      RunTimer()
    }
    el.btnPress.play()
  })
  
  el.minus.addEventListener('click', function() {
    let minutes = Number(el.minutes.textContent)
  
    if (minutes > 0) {
      minutes -= 5
      el.minutes.textContent = minutes
    }
    el.btnPress.play()
  });

  el.plus.addEventListener('click', function() {
    let minutes = Number(el.minutes.textContent)
    minutes += 5
    el.minutes.textContent = minutes
    el.btnPress.play();
  });
  

  el.stop.addEventListener('click', function() {
    isRunning = false
    el.btnPress.play()
  })
}
