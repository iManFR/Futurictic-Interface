/************
Optimizations
************/
const leftPart = document.querySelector('.left-part')
const middlePart = document.querySelector('.middle-part')
const rightPart = document.querySelector('.right-part')

/********************* 
Generate Random Number
*********************/
let randomNumber = function(min, max){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

/**************
Button ON / OFF
**************/
let startButton = leftPart.querySelector('.start-button button')
let screenOff = document.querySelector('.screen-off')
startButton.addEventListener('click', () => {
    screenOff.classList.toggle('screen-off-toggle')
    screenOff.style.transform = 'translateX(0%)'
})


/***************
Commands Buttons
***************/
let restartButton = leftPart.querySelector('.restart-button')
restartButton.addEventListener('click', () => {
    location.reload()
})

let teleportButton = leftPart.querySelector('.teleport-button')
teleportButton.addEventListener('click', () => {
    positionX += randomNumber(-10000000, 10000000)/1000000
    positionY += randomNumber(-10000000, 10000000)/1000000
})

let turboButton = leftPart.querySelector('.turbo-button')
let circle1 = middlePart.querySelector('.circle-1')
let circle2 = middlePart.querySelector('.circle-2')
let circle3 = middlePart.querySelector('.circle-3')
let circle4 = middlePart.querySelector('.circle-4')
let circle6 = middlePart.querySelector('.circle-6')
let circle7 = middlePart.querySelector('.circle-7')
let circle8 = middlePart.querySelector('.circle-8')
turboButton.addEventListener('click', () => {
    circle1.style.animationDuration ='6s'
    circle2.style.animationDuration ='11s'
    circle3.style.animationDuration ='15s'
    circle4.style.animationDuration ='2s'
    circle6.style.animationDuration ='1s'
    circle7.style.animationDuration ='17s'
    circle8.style.animationDuration ='3s'
})



/******************************
Random Player Position Function
******************************/
const teamPlayer = rightPart.querySelectorAll('.team-player')
for (let i = 0; i < teamPlayer.length; i++){
    let x = Math.floor(Math.random() * 94)
    let y = Math.floor(Math.random() * 92)
    teamPlayer[i].style.top = `${y}%`
    teamPlayer[i].style.left = `${x}%`
    //Move player map Fuction
    function movePlayer (){
        let plusX = randomNumber(-4, 4)
        let plusY = randomNumber(-4, 4)
        x = x + plusX
        y = y + plusY
        if ((x > -15 && x < 115) && (y > -15 && y < 115)){
            teamPlayer[i].style.top = `${y}%`
            teamPlayer[i].style.left = `${x}%`
        } else {
            return 
        }
    }
    setInterval(movePlayer, 2000)
}


/********************* 
Display hours on timer
*********************/
let h24 = rightPart.querySelector('.h24-timer p')
let actualTime = 0
function horloge() {
    let heure =new Date()
    actualTime = heure.getHours()+':'+heure.getMinutes()+':'+heure.getSeconds()
    h24.textContent = actualTime

    let consoleLog = leftPart.querySelector('.console p')
    consoleLog.textContent = `[${actualTime}] RTMachine Cannot drive robot, program stopped, URControl C100A0: Robot changed mode: OK, Elbow C110A2: JOINT SECURITY STOP, Elbow 43A0: Could not track target position, URControl c100A4: Robot Changed mode: SECURITY STOPPED, URControl c100A0: Robot Changed mode: OK, Elbow C110A4 JOINT SECURITY STOP, Elbow C43A255: Could not track target position`
}

setInterval(horloge, 1000)
setTimeout(horloge, 0)

/**********
Console Log
**********/


/*********************** 
Random Location Position
***********************/
let position = middlePart.querySelector('.location p')
let positionX = 22.145424
let positionY = 91.784718
function positionPlus(){
    let positionPlusX = randomNumber(-2, 2)/1000000
    let positionPlusY = randomNumber(-2, 2)/1000000
    positionX = positionX + positionPlusX
    positionY = positionY + positionPlusY
    position.innerHTML = `${positionX.toFixed(6)} ${positionY.toFixed(6)}`
}
setInterval(positionPlus, 1000)
setTimeout(positionPlus, 0)


/************ 
Circle Health (script retrieved from the internet)
************/
let circle = leftPart.querySelector('circle')
let circleH = leftPart.querySelector('.healthcirc')
let circleS = leftPart.querySelector('.shieldcirc')
let radius = circle.r.baseVal.value
let circumference = radius * 2 * Math.PI

circleH.style.strokeDasharray = `${circumference} ${circumference}`
circleH.style.strokeDashoffset = `${circumference}`
circleS.style.strokeDasharray = `${circumference} ${circumference}`
circleS.style.strokeDashoffset = `${circumference}`

function setProgressHealth(percent) {
  const offset = circumference - percent / 100 * circumference
  circleH.style.strokeDashoffset = offset
}

function setProgressShield(percent) {
    const offset = circumference - percent / 100 * circumference
    circleS.style.strokeDashoffset = offset
  }

setProgressHealth(80)
setProgressShield(60)


/*****************
Random data number 
*****************/
function randomNumberData(){
    let dataNumber = leftPart.querySelectorAll('.data-numbers p')
    for (let i = 0; i < dataNumber.length; i++){
        let randomDataNumber = randomNumber(100,999)
        if (randomDataNumber%2 == 0){
            dataNumber[i].style.color = '#47D2FB'
            dataNumber[i].style.textShadow = '0px 0px 20px rgba(71, 209, 251, 1)'
            dataNumber[i].style.transition = 'all 0.4s ease-in'
        } else {
            dataNumber[i].style.color = '#8E0001'
            dataNumber[i].style.textShadow = '0px 0px 20px rgba(142, 0, 1, 1)'
            dataNumber[i].style.transition = 'all 0.4s ease-in'
        }
        dataNumber[i].innerHTML = `${randomDataNumber}`
    }    
}
setInterval(randomNumberData, 2500)
setTimeout(randomNumberData, 0)


/***********
TIMER CHRONO (script retrieved from the internet)
***********/
let timerChrono = rightPart.querySelector('.mission-timer p');
let seconds = 0
let minutes = 0
let hours = 0
let t

function add() {
    seconds++
    if (seconds >= 60) {
        seconds = 0
        minutes++
        if (minutes >= 60) {
            minutes = 0
            hours++
        }
    }
    
    timerChrono.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds)

    timer()
}
function timer() {
    t = setTimeout(add, 1000)
}
timer()