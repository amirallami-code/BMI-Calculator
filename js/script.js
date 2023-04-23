let $ = document

const userWeight = $.getElementById('weight')
const userHeight = $.getElementById('height')

const height = $.getElementById('height-val')
const weight = $.getElementById('weight-val')

const result = $.getElementById('result')
const category = $.getElementById('category')

let userWeightNum = 20;
let userHeightNum = 1;

function userWeightHandler(event) {
    userWeightNum = event.target.value
    weight.innerHTML = userWeightNum + ' kg'
}

function userHeightHandler(event) {
    userHeightNum = event.target.value
    userHeightNum = userHeightNum / 100
    height.innerHTML = Math.floor((userHeightNum * 100)) + ' cm'
}

function calculate() {

    let userAverageBMI = userWeightNum / (userHeightNum * userHeightNum)

    result.innerHTML = userAverageBMI.toFixed(1)

    if (userAverageBMI < 18.5) {
        category.innerHTML = 'UnderWeight'
        result.style.cssText = 'color: #87B1D9;'
    } else if (userAverageBMI >= 18.5 && userAverageBMI <= 24.9) {
        category.innerHTML = 'Normal'
        result.style.cssText = 'color: #3DD366;'
    } else if (userAverageBMI >= 25 && userAverageBMI <= 29.9) {
        category.innerHTML = 'OverWeight'
        result.style.cssText = 'color: #EEE133;'
    } else if (userAverageBMI >= 30 && userAverageBMI <= 34.9) {
        category.innerHTML = 'Obese'
        result.style.cssText = 'color: #FD802E;'
    } else if (userAverageBMI > 35) {
        category.innerHTML = 'Exteremely Obese'
        result.style.cssText = 'color: #F95353;'
        document.body.style.cssText = 'background: : #F95353;'
    } else {
        category.innerHTML = 'Select Correct Value'
        result.style.cssText = 'color: #F95353;'
        result.innerHTML = 'Error!'
    }
}

userWeight.addEventListener('change', userWeightHandler)
userHeight.addEventListener('change', userHeightHandler)