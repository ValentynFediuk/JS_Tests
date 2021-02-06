const body = document.querySelector('body')
const button = document.querySelector('button')
const colors = ['red', 'green', 'blue', 'black', 'yellow', 'orange', 'pink', 'violet']
const title = document.querySelector('title')

button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    title.innerHTML = colors[colorIndex]
}

// modifications
// window.setInterval(changeBackground, 1000)


































// const body = document.querySelector('body')
// const button = document.querySelector('button')
// const title = document.querySelector('title')
// const colors = ['red', 'green', 'blue', 'black', 'purple', 'pink', 'yellow']

// button.addEventListener('click', changeBackground)

// function changeBackground() {
//     const colorIndex = parseInt(Math.random()*colors.length)
//     body.style.backgroundColor = colors[colorIndex]
//     title.innerHTML = colors[colorIndex]
// }

// // modifications
// // window.setInterval(changeBackground, 1000)