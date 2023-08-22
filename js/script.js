const launchB = document.querySelector('#launchB')
const animRocket = document.querySelector('.animRocket')
const leftR1 = document.querySelector('.b1RocketLeft')
const rightR1 = document.querySelector('.b1Rocket')
const Ivan = document.querySelector('.Ivan')
const RocketContent = document.querySelector('.RocketContent')
let ivan = false

launchB.addEventListener('click', () => {
    disableScroll()
    animRocket.classList.add('_active')
    setTimeout(() => {
        leftR1.classList.add('_active')
        rightR1.classList.add('_active')
        Ivan.classList.add('_active')
        RocketContent.classList.add('_active')
        setTimeout(() => {
            enableScroll()
        }, 5000);
    }, 5000);
})


// Управление космонавтом
document.addEventListener('click', (event) => {
    if (!ivan) return;
    let x = event.clientX
    let y = event.clientY + window.scrollY

    Ivan.style.left = x.toString() + 'px'
    Ivan.style.top = y.toString() + 'px'
    console.log(`x: ${x}, y: ${y}`)
})

// Отключить прокрутку
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Включить прокрутку
function enableScroll() {
  document.body.style.overflow = 'auto';
}










































