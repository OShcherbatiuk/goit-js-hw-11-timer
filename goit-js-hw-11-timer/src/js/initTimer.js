import CountdownTimer from './timer'

function initTimer(selector, targetDate) {
    const timer = new CountdownTimer({ selector, targetDate });
    timer.start()

}

export default initTimer
