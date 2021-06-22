const container = document.querySelector('.container')
const menu = document.querySelector('.menu')

function showMenu(e) {
    e.preventDefault()
    menu.style.display = 'flex'
    if (e.clientX > (container.offsetLeft + container.clientWidth - 200)) {
        console.log('sdk')
        menu.style.left = (e.clientX - 200) + 'px'
    }
    else menu.style.left = e.clientX + 'px'
    menu.style.top = e.clientY + 'px'
}

function hideMenu(e) {
    if (!container.contains(e.target)) {
        menu.style.display = 'none'
    }
}

container.addEventListener('contextmenu', showMenu)

document.addEventListener('contextmenu', hideMenu)
document.addEventListener('click', hideMenu)
container.addEventListener('click', () => menu.style.display = 'none')