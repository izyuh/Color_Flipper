const button = document.getElementById('color-btn')
const displayColor = document.querySelector('#h1-color');

button.addEventListener('click', changeColor)

function changeColor(){
    const body = document.body
    const colors = ['#20405c','#5cc941','#c941c2','#da7421','#ccec16','#e62121']

    const random = Math.floor(Math.random() *colors.length)
    const color = colors[random]
    displayColor.textContent = color
    body.style.background = color
}