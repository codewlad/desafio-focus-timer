import { elements } from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Cards } from "./cards.js"
import { Sounds } from "./sounds.js"

const { 
    btnPlay,
    btnPause,
    btnStop,
    btnIncrease,
    btnDecrease,
    btnToggleSetTheMinutes,
    btnSetMinutes,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    dialMinutes,
    dialSeconds,
} = elements

const sounds = Sounds()

const cards = Cards ({
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    stopSounds: sounds.stopSounds,
    playSoundForest: sounds.playSoundForest,
    playSoundRain: sounds.playSoundRain,
    playSoundCoffeeShop: sounds.playSoundCoffeeShop,
    playSoundFireplace: sounds.playSoundFireplace
})

const timer = Timer ({
    dialMinutes,
    dialSeconds,
    btnPlay,
    btnPause,
    soundKichenTimer: sounds.soundKichenTimer
})

const controls = Controls({
    btnPlay,
    btnPause,
    getTimer: timer.getTimer,
    checkingTimer: timer.checkingTimer,
    setTimer: timer.setTimer,
    startTimer: timer.startTimer,
    pauseTimer: timer.pauseTimer,
    stopTimer: timer.stopTimer,
    resetTimer: timer.resetTimer,
    increaseTimer: timer.increaseTimer,
    decreaseTimer: timer.decreaseTimer,
    soundButtonPress: sounds.soundButtonPress
})

btnPlay.addEventListener("click", controls.play)
btnPause.addEventListener("click", controls.pause)
btnStop.addEventListener("click", controls.stop)
btnIncrease.addEventListener("click", controls.increase)
btnDecrease.addEventListener("click", controls.decrease)
btnToggleSetTheMinutes.addEventListener("click", controls.toggleSetTheMinutes)
btnSetMinutes.addEventListener("click", controls.setMinutes)

btnForest.addEventListener("click", cards.buttonForest)
btnRain.addEventListener("click", cards.buttonRain)
btnCoffeeShop.addEventListener("click", cards.buttonCoffeeShop)
btnFireplace.addEventListener("click", cards.buttonFireplace)