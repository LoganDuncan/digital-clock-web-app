// Displays the current time
function showTime() { // Example display -> 12:03:45 PM
    let date = new Date()
    let hour = date.getHours() // Returns value 0-23
    let minute = date.getMinutes() // Returns value 0-59
    let second = date.getSeconds() // Returns value 0-59
    let period = "AM"

    if (hour >= 12) {
        hour = hour - 12
        period = "PM"
    }

    if (hour == 0) {
        hour = 12
    }

    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    let time = `${hour}:${minute}:${second} ${period}`

    const clock = document.querySelector('#clockDisplay')
    clock.innerText = time
    // setInterval(showTime, 1000)
}

showTime()
let timer = setInterval(showTime, 1000)

// Sets variables for each button
const clockDisplay = document.querySelector('#clockDisplay')
const onBtn = document.querySelector('#onButton')
const orangeBtn = document.querySelector('#orangeButton')
const blueBtn = document.querySelector('#blueButton')
const greenBtn = document.querySelector('#greenButton')
const greyBtn = document.querySelector('#bgButton1')
const blackBtn = document.querySelector('#bgButton2')
const whiteBtn = document.querySelector('#bgButton3')
// Event Listener for each button
orangeBtn.addEventListener('click', function () { changeColor('orange') })
blueBtn.addEventListener('click', function () { changeColor('blue') })
greenBtn.addEventListener('click', function () { changeColor('rgb(0, 255, 60)') })
onBtn.addEventListener('click', function () { displayToggle() })
greyBtn.addEventListener('click', function () { changeBg('rgb(182, 174, 174)') })
blackBtn.addEventListener('click', function () { changeBg('black') })
whiteBtn.addEventListener('click', function () { changeBg('white') })

// Function for each functionality
function displayToggle() {
    clockDisplay.classList.toggle("displayToggle")
}

function changeColor(color) {
    clockDisplay.style.color = color
}

function changeBg(color) {
    clockDisplay.style.background = color
}