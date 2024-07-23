const button = document.getElementById('color-btn')
const displayColor = document.querySelector('#h1-color');

button.addEventListener('click', changeColor)

function changeColor(){
    const body = document.body

    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    const color = `rgb(${red},${green},${blue})`
    
    displayColor.textContent = color
    body.style.background = color
}