const body = document.querySelector('body')
const button = document.querySelector('#btn')
const value = document.querySelector('#hex-value')
const hexValues = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click', changeHex)

function changeHex() {
    hex = '#'

    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[index]
    }
    value.textContent = hex
    body.style.backgroundColor = hex 
}






















// const button = document.querySelector('#btn')
// const value = document.querySelector('#hex-value')
// const body = document.querySelector('body')
// const hexValues = [1,2,3,4,5,6,7,8,9,'A','B','C','D','F']

// button.addEventListener('click', changeHex)

// function changeHex() {
//     hex = '#'

//     for (let i = 0; i < 6; i++) {
//         const index = Math.floor(Math.random()*hexValues.length)
//         hex += hexValues[index]
//     }
//     value.textContent = hex
//     body.style.backgroundColor = hex    
// }

