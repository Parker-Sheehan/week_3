console.log("Hellow world!")
let counter = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

const countDown = (evt) => {
    let currentCount = parseInt(counter.textContent)
    currentCount--
    counter.textContent = currentCount
}

const countUp = (evt) =>{
    let currentCount = parseInt(counter.textContent)
    currentCount++
    counter.textContent = currentCount
}

const countReset = (evt) =>{
    let currentCount = parseInt(counter.textContent)
    currentCount = 0
    counter.textContent = currentCount
}

minusBtn.addEventListener('click', countDown)
plusBtn.addEventListener('click', countUp)
resetBtn.addEventListener('click', countReset)

//============================================================//

const themeButtons = document.querySelectorAll(".theme-buttons")

const changeTheme = evt =>{
    console.log(evt.target)

    let theme = evt.target.textContent
    console.log(theme)
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    const buttons = document.querySelectorAll('button')

    body.className = theme
    main.className = theme

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }

}

for(let i = 0; i < themeButtons.length; i++){
    themeButtons[i].addEventListener('click', changeTheme)
}