import { ColorsAttr } from './list.js'

const menuList = document.querySelector('#colors-list')
const coins = document.querySelector('#coins')
const showColors = document.querySelector('.bubbling-colors')

let activeColors = []

coins.value = 2


ColorsAttr.forEach(item => {
    let listItem = document.createElement('li')
        listItem.setAttribute('class', 'color-option')
    let colorImgContainer = document.createElement('div')
        colorImgContainer.setAttribute('class', 'color-show-container')
    let colorShowCircle = document.createElement('div')
        colorShowCircle.setAttribute('class', 'color-show')
        colorShowCircle.style.background = item.colorName
    let colorTittle = document.createElement('h1')
        colorTittle.setAttribute('class', 'color-name')
        colorTittle.innerText = item.colorName
    let buttonValue = document.createElement('input')
        buttonValue.setAttribute('type', 'button')
        buttonValue.setAttribute('class', 'color-price')
        buttonValue.setAttribute('value', item.price)
    
        listItem.appendChild(colorImgContainer)
        colorImgContainer.appendChild(colorShowCircle)
        listItem.appendChild(colorTittle)
        listItem.appendChild(buttonValue)
        menuList.appendChild(listItem)
})

const buttonsMenu = document.querySelectorAll('.color-price')

buttonsMenu.forEach(function(item, index) {
    item.addEventListener('click', function(){
    let valueOfItem = parseInt(item.value)
    if(coins.value >= valueOfItem) {
        coins.value = coins.value - valueOfItem
        activeColors.push(index)
        coins.innerText =`Coins: ${coins.value}`
        showColorOnScreen(index)
    }
})})

function updateGame() {
    activeColors.forEach(item => {
        coins.value = coins.value + ColorsAttr[item].profit
    })
    coins.innerText =`Coins: ${coins.value}`
    let bubblingColors = document.querySelectorAll('.color-bubbling')
    bubblingColors.forEach(item => {
        item.style.animation = 'bubbling 2s infinite'
    })
}

function showColorOnScreen(numb) {
    let createAColor = document.createElement('div')
    createAColor.setAttribute('class', 'color-bubbling')
    createAColor.style.background = ColorsAttr[numb].colorName
    showColors.appendChild(createAColor)
}

setInterval(updateGame, 2000)
