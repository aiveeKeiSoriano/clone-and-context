const draggable = document.querySelectorAll('.draggable')
const tasks = document.querySelectorAll('.tasks')

function dragStart(e) {
    e.target.classList.add('dragging')
}

function dragEnd(e) {
    e.target.classList.remove('dragging')
}

draggable.forEach(el => {
    el.addEventListener('dragstart', dragStart)
    el.addEventListener('dragend', dragEnd)
})

function dragOver(e) {
    if (e.target.classList[0] === 'draggable') return
    e.preventDefault()
    let dragging = document.querySelector('.dragging')
    let children = [...e.target.children]
    let nearest = null;
    for (let child of children) {
        if (e.clientY < child.offsetTop) {
            nearest = child
            break;
        }
    }
    if (nearest) {
        e.target.insertBefore(dragging, nearest)
    }
    else e.target.appendChild(dragging)
    // e.stopPropagation()
}

tasks.forEach(el => {
    el.addEventListener('dragover', dragOver) //, true)
})